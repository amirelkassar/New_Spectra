using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class CreateSectionsCommand : ICommand<OperationResult>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? HeadDoctorId { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }
    }

    public class CreateSectionsCommandHandler(ISectionsRepository sectionsRepository,IBaseMongoDbRepository<Employee> empRepository) : IRequestHandler<CreateSectionsCommand, OperationResult>
    {
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;

        public async Task<OperationResult> Handle(CreateSectionsCommand request, CancellationToken cancellationToken)
        {
            var names = await _sectionsRepository.GetAllAsync(b => b.EnName.ToLower() == request.EnName.ToLower());
            if (names.Any())
            {
                throw new AlreadyExistException(request.EnName, nameof(request.EnName));
            }
            var emp = await _empRepository.GetAsync(e => e.Id == request.HeadDoctorId) ?? throw new NotFoundException("Employees", request.HeadDoctorId);

            var entity = Section.Create(Ulid.NewUlid().ToString(),
                request.EnName,
                request.ArName,
                request.Specsifications);

            entity.HeadDoctorId = emp.Id;
            entity.HeadDoctorName = emp.Name.FirstName;

            await _sectionsRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);
        }
    }
    public class CreateSectionsCommandValidator : AbstractValidator<CreateSectionsCommand>
    {
        public CreateSectionsCommandValidator()
        {
            RuleFor(x => x.EnName)
                .NotEmpty()
                .NotNull()
                .MinimumLength(2);

            RuleFor(x => x.ArName)
                .NotEmpty()
                .NotNull()
                .MinimumLength(2);

            RuleFor(x => x.Specsifications)
                .NotEmpty()
                .NotNull()
                .Must(s => s.Count > 0)
                .WithMessage("Specsifications must be more than 0");

        }
    }
}