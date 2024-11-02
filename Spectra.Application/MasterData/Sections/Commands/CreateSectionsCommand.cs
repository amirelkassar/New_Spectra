using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class CreateSectionsCommand : ICommand<OperationResult<string>>
    {

        public string Name { get; set; }
        public List<string> Diagnoses { get; set; }
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



            var entity = Section.Create(

             Ulid.NewUlid().ToString(), request.Name,
           request.DoctorId, request.DoctorName, request.Diagnoses

             );

            await _sectionsRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }
    //public class CreateServicesMCommandValidator : AbstractValidator<CreateMedicalPatientProfileCommand>
    //{
    //    public CreateServicesMCommandValidator()
    //    {
    //        RuleFor(x => x.Name)
    //            .NotEmpty().WithMessage("Service name is required.")
    //            .MaximumLength(100).WithMessage("Service name cannot exceed 100 characters.");

    //        RuleFor(x => x.DefinitionServices)
    //            .NotEmpty().WithMessage("Service definition is required.")
    //            .MaximumLength(500).WithMessage("Service definition cannot exceed 500 characters.");

    //        RuleFor(x => x.Price)
    //            .GreaterThan(0).WithMessage("Price must be greater than zero.");

    //        RuleFor(x => x.TermsAndConditions)
    //            .NotEmpty().WithMessage("Terms and conditions are required.");

    //        RuleFor(x => x.AvailableSrvices)
    //            .IsInEnum().WithMessage("Invalid value for available services.");

    //        RuleFor(x => x.Secations)
    //            .Must(sections => sections == null || sections.Count > 0)
    //            .WithMessage("If provided, sections must contain at least one item.");

    //        RuleFor(x => x.Photo)
    //            .Must(photos => photos == null || photos.All(file => file.Length > 0))
    //            .WithMessage("If provided, each photo must be a valid file.");
    //    }
    //}
}