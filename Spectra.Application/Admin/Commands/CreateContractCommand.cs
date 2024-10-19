//using FluentValidation;
//using MediatR;
//using Spectra.Application.Messaging;
//using Spectra.Domain.Contracts;
//using Spectra.Domain.Shared.Wrappers;


//namespace Spectra.Application.Admin.Commands
//{

//    public class CreateContractCommand : ICommand<OperationResult<string>>
//    {

//        public List<OperationContrct>? Freelancer { get; set; }
//        public List<OperationContrct>? SpectraTeam { get; set; }
//        public int HoursOfWork { get; set; }
//        public int DaysOfWork { get; set; }
//        public int MinutesOfWork { get; set; }
//        public bool SendContract { get; set; }


//    }

//    public class CreateDoctorCommandHandler : IRequestHandler<CreateContractCommand, OperationResult<string>>
//    {

//        private readonly IContractRepository _contractRepository;


//        public CreateDoctorCommandHandler(IContractRepository contractRepository)
//        {
//            _contractRepository = contractRepository;

//        }
//        public async Task<OperationResult<string>> Handle(CreateContractCommand request, CancellationToken cancellationToken)
//        {





//            var contract = EmploymentContract.Create(
//                Ulid.NewUlid().ToString(),
//              request.Freelancer,
//              request.SpectraTeam,
//              request.HoursOfWork,
//              request.DaysOfWork,
//              request.MinutesOfWork,
//              request.SendContract
//              );

//            await _contractRepository.AddAsync(contract);



//            return OperationResult<string>.Success(contract.Id);


//        }
//    }
//    public class EmploymentContractValidator : AbstractValidator<CreateContractCommand>
//    {
//        public EmploymentContractValidator()
//        {
//            //// Validate that Freelancer list is not null or empty
//            //RuleFor(x => x.Freelancer)
//            //    .NotNull().WithMessage("Freelancer list is required.")
//            //    .Must(freelancer => freelancer.Count > 0).When(x => x.Freelancer != null)
//            //    .WithMessage("Freelancer list must contain at least one entry.");

//            //// Validate that SpectraTeam list is not null or empty
//            //RuleFor(x => x.SpectraTeam)
//            //    .NotNull().WithMessage("SpectraTeam list is required.")
//            //    .Must(spectraTeam => spectraTeam.Count > 0).When(x => x.SpectraTeam != null)
//            //    .WithMessage("SpectraTeam list must contain at least one entry.");

//            // Validate HoursOfWork (positive integer)
//            RuleFor(x => x.HoursOfWork)
//                .GreaterThan(0).WithMessage("Hours of work must be greater than 0.");

//            // Validate DaysOfWork (positive integer)
//            RuleFor(x => x.DaysOfWork)
//                .GreaterThan(0).WithMessage("Days of work must be greater than 0.");

//            // Validate MinutesOfWork (0-59 range)
//            RuleFor(x => x.MinutesOfWork)
//                .InclusiveBetween(0, 59).WithMessage("Minutes of work must be between 0 and 59.");

//            // Validate SendContract (must be true to proceed)
//            RuleFor(x => x.SendContract)
//                .Equal(true).WithMessage("Contract must be sent.");
//        }
//    }

//}
