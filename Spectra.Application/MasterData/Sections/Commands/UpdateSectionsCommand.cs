using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Commands
{
    public class UpdateSectionsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<string> SpecializationIds { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }



        public class UpdateSectionsCommandHandler : IRequestHandler<UpdateSectionsCommand, OperationResult<Unit>>
        {
            private readonly ISectionsRepository _sectionsRepository;




            public UpdateSectionsCommandHandler(ISectionsRepository sectionsRepository)
            {
                _sectionsRepository = sectionsRepository;

            }

            public async Task<OperationResult<Unit>> Handle(UpdateSectionsCommand request, CancellationToken cancellationToken)
            {
                var names = await _sectionsRepository.GetAllAsync(b => b.Name == request.Name && b.Id != request.Id);
                if (names.Any())
                {
                    throw new DbErrorException(" this's Name is a ready exists");
                }
                var entity = await _sectionsRepository.GetByIdAsync(request.Id);


                entity.DoctorName = request.DoctorName;
                entity.Name = request.Name;
                entity.SpecializationIds = request.SpecializationIds;
                entity.DoctorId = request.DoctorId;


                await _sectionsRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
        public class UpdateSectionsCommandValidator : AbstractValidator<UpdateSectionsCommand>
        {
            public UpdateSectionsCommandValidator()
            {
                RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Name is required.")
                    .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");

                RuleFor(x => x.SpecializationIds)
                    .NotNull().WithMessage("Diagnoses list is required.")
                    .Must(d => d.Count > 0).WithMessage("At least one diagnosis is required.")
                    .ForEach(d => d.NotEmpty().WithMessage("Diagnosis cannot be empty."));

                RuleFor(x => x.DoctorId)
                    .NotEmpty().WithMessage("Doctor ID is required.")
                    .MaximumLength(50).WithMessage("Doctor ID must not exceed 50 characters.");

                RuleFor(x => x.DoctorName)
                    .NotEmpty().WithMessage("Doctor name is required.")
                    .MaximumLength(100).WithMessage("Doctor name must not exceed 100 characters.");
            }
        }
    }
}
