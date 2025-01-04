using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class CreateSectionsCommand : ICommand<OperationResult>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? HeadDoctorId { get; set; }
        public ICollection<string> Specsifications { get; set; }
    }

    public class CreateSectionsCommandHandler(ISectionsRepository sectionsRepository,
        IBaseMongoDbRepository<Employee> empRepository,
         IBaseMongoDbRepository<Specialization> specializationRepository,
         IIdentityService identityService) : IRequestHandler<CreateSectionsCommand, OperationResult>
    {
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;
        private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;
        private readonly IIdentityService _identityService = identityService;

        public async Task<OperationResult> Handle(CreateSectionsCommand request, CancellationToken cancellationToken)
        {
            var names = await _sectionsRepository.GetAllAsync(b => b.EnName.ToLower() == request.EnName.ToLower());
            if (names.Any())
            {
                throw new AlreadyExistException(request.EnName, nameof(request.EnName));
            }

            var entity = Section.Create(Ulid.NewUlid().ToString(),
                request.EnName,
                request.ArName);

            if (!string.IsNullOrWhiteSpace(request.HeadDoctorId))
            {
                var emp = await _empRepository.GetAsync(e => e.Id == request.HeadDoctorId) ?? throw new NotFoundException("Employees", request.HeadDoctorId);
                entity.HeadDoctorId = emp.Id;
                entity.HeadDoctorName = emp.Name.FirstName;
                await _identityService.AddUserToRole(emp.UserId, Roles.DepartmentHead);
            }
            if (request.Specsifications is not null && request.Specsifications.Count > 0)
            {
                var (allSpecializations, allSpecTotal) = await _specializationRepository.GetAllAsync();

                foreach (var spec in request.Specsifications)
                {
                    if (!allSpecializations.Any(s => s.Id == spec))
                    {
                        throw new NotFoundException("Specsifications", spec);
                    }
                }

                entity.Specsifications = allSpecializations.Where(s => request.Specsifications.Any(rs => rs == s.Id))
                    .Select(s => new SectionSpecsification
                    {
                        Id = s.Id,
                        ArName = s.ArName,
                        EnName = s.EnName
                    })
                    .ToArray();
            }


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