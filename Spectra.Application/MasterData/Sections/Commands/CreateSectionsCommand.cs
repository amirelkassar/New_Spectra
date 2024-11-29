using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class CreateSectionsCommand : ICommand<OperationResult>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }
    }

    public class CreateSectionsCommandHandler(ISectionsRepository sectionsRepository) : IRequestHandler<CreateSectionsCommand, OperationResult>
    {
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;

        public async Task<OperationResult> Handle(CreateSectionsCommand request, CancellationToken cancellationToken)
        {
            var names = await _sectionsRepository.GetAllAsync(b => b.EnName.ToLower() == request.EnName.ToLower());
            if (names.Any())
            {
                throw new AlreadyExistException(request.EnName, nameof(request.EnName));
            }
            var entity = Section.Create(Ulid.NewUlid().ToString(),
                request.EnName,
                request.ArName,
                request.HeadDoctorId,
                request.HeadDoctorName,
                request.Specsifications);

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

            RuleFor(x => x.HeadDoctorId)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.HeadDoctorName)
                .NotEmpty()
                .NotNull();
        }
    }
}