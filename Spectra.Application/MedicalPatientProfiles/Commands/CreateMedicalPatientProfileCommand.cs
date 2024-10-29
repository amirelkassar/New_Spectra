
//using FluentValidation;
//using MediatR;
//using Microsoft.AspNetCore.Http;
//using Spectra.Application.MasterData.HellperFunc;
//using Spectra.Application.Messaging;
//using Spectra.Domain.MasterData.ServicesMD;
//using Spectra.Domain.MedicalPatientProfiles;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;


//namespace Spectra.Application.MedicalPatientProfiles.Commands
//{
//    public class CreateMedicalPatientProfileCommand : ICommand<OperationResult<string>>
//    {
//        public string DoctorId { get; set; }
//        public string PatientId { get; set; }
//        public string PatientName { get; set; }
//        public string ClientId { get; set; }
//        public string ClientName { get; set; }
//        public string? DrugId { get; set; }
//        public string? ReportsId { get; set; }
//    }



//    public class CreateMedicalPatientProfileCommandHandler : IRequestHandler<CreateMedicalPatientProfileCommand, OperationResult<string>>
//    {
//        private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;
   



//        public CreateMedicalPatientProfileCommandHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
//        {
//            _medicalPatientProfileRepository = medicalPatientProfileRepository;

//        }

//        public async Task<OperationResult<string>> Handle(CreateMedicalPatientProfileCommand request, CancellationToken cancellationToken)
//        {
            
         
          
//               var entity = MedicalPatientProfile.Create(

//                Ulid.NewUlid().ToString(),request.DoctorId,request.PatientId,request.ClientId,request.DrugId,request.ReportsId, request.PatientName,request.ClientName
           
//                );
//            await _medicalPatientProfileRepository.AddAsync(entity);

//            return OperationResult<string>.Success(entity.Id);

       
           
//}
//    }
//    //public class CreateServicesMCommandValidator : AbstractValidator<CreateMedicalPatientProfileCommand>
//    //{
//    //    public CreateServicesMCommandValidator()
//    //    {
//    //        RuleFor(x => x.Name)
//    //            .NotEmpty().WithMessage("Service name is required.")
//    //            .MaximumLength(100).WithMessage("Service name cannot exceed 100 characters.");

//    //        RuleFor(x => x.DefinitionServices)
//    //            .NotEmpty().WithMessage("Service definition is required.")
//    //            .MaximumLength(500).WithMessage("Service definition cannot exceed 500 characters.");

//    //        RuleFor(x => x.Price)
//    //            .GreaterThan(0).WithMessage("Price must be greater than zero.");

//    //        RuleFor(x => x.TermsAndConditions)
//    //            .NotEmpty().WithMessage("Terms and conditions are required.");

//    //        RuleFor(x => x.AvailableSrvices)
//    //            .IsInEnum().WithMessage("Invalid value for available services.");

//    //        RuleFor(x => x.Secations)
//    //            .Must(sections => sections == null || sections.Count > 0)
//    //            .WithMessage("If provided, sections must contain at least one item.");

//    //        RuleFor(x => x.Photo)
//    //            .Must(photos => photos == null || photos.All(file => file.Length > 0))
//    //            .WithMessage("If provided, each photo must be a valid file.");
//    //    }
//    //}
//}