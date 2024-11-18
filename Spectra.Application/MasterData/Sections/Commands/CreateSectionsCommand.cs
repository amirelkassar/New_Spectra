using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class CreateSectionsCommand : ICommand<OperationResult<string>>
    {

        public string Name { get; set; }
        public List<string> SpecializationIds { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }
    }



    public class CreateSectionsCommandHandler : IRequestHandler<CreateSectionsCommand, OperationResult<string>>
    {
        private readonly ISectionsRepository _sectionsRepository;




        public CreateSectionsCommandHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }

        public async Task<OperationResult<string>> Handle(CreateSectionsCommand request, CancellationToken cancellationToken)
        {


            var names = await _sectionsRepository.GetAllAsync(b => b.Name == request.Name);
            if (names.Any())
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }
            var entity = Section.Create(

             Ulid.NewUlid().ToString(), request.Name,
           request.DoctorId, request.DoctorName, request.SpecializationIds

             );

            await _sectionsRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }
    public class CreateSectionsCommandValidator : AbstractValidator<CreateSectionsCommand>
    {
        public CreateSectionsCommandValidator()
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