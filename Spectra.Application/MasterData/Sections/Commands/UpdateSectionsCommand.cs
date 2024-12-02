using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Commands
{
    public class UpdateSectionsCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? HeadDoctorId { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }

        public class UpdateSectionsCommandHandler(ISectionsRepository sectionsRepository,
            IBaseMongoDbRepository<Employee> empRepository,
            IBaseMongoDbRepository<Specialization> specializationRepository) : IRequestHandler<UpdateSectionsCommand, OperationResult>
        {
            private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;
            private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;

            public async Task<OperationResult> Handle(UpdateSectionsCommand request, CancellationToken cancellationToken)
            {
                var entites = await _sectionsRepository.GetAllAsync(b => b.EnName == request.EnName && b.Id != request.Id);
                if (entites is null)
                {
                    throw new AlreadyExistException(request.EnName, nameof(request.EnName));
                }
                var entity = await _sectionsRepository.GetByIdAsync(request.Id);
                if (entity is null)
                {
                    throw new NotFoundException("Sections", request.Id);
                }
                if (!string.IsNullOrWhiteSpace(request.HeadDoctorId))
                {
                    var emp = await _empRepository.GetAsync(e => e.Id == request.HeadDoctorId) ?? throw new NotFoundException("Employees", request.HeadDoctorId);
                    entity.HeadDoctorId = emp.Id;
                    entity.HeadDoctorName = emp.Name.FirstName;
                }
                ICollection<SectionSpecsification> specializations = null;
                if (request.Specsifications is not null && request.Specsifications.Count > 0)
                {
                    var (allSpecializations, allSpecTotal) = await _specializationRepository.GetAllAsync();

                    foreach (var spec in request.Specsifications)
                    {
                        if (!allSpecializations.Any(s => s.Id == spec.Id))
                        {
                            throw new NotFoundException("Specsifications", spec);
                        }
                    }

                    specializations = allSpecializations.Where(s => request.Specsifications.Any(rs => rs.Id == s.Id))
                        .Select(s=>new SectionSpecsification
                        {
                            Id=s.Id,
                            ArName=s.ArName,
                            EnName=s.EnName
                        })
                        .ToArray();
                }
                entity.EnName = request.EnName;
                entity.ArName = request.ArName;
                entity.Specsifications = specializations;

                await _sectionsRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);
            }

        }
        public class UpdateSectionsCommandValidator : AbstractValidator<UpdateSectionsCommand>
        {
            public UpdateSectionsCommandValidator()
            {
                RuleFor(x => x.Id)
                .NotEmpty()
                .NotNull();

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
}
