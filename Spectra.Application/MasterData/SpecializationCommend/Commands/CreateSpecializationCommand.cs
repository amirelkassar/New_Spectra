using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;



namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{


    public class CreateSpecializationCommand : ICommand<OperationResult<string>>
    {

        public string SpecializationName { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }
       

        public double ConsultationCost { get; set; }
    }

    public class CreateSpecializationCommandHandler : IRequestHandler<CreateSpecializationCommand, OperationResult<string>>
    {
        private readonly ISpecializationsRepository _specializationRepository;
     
        public CreateSpecializationCommandHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
          
        }

        public async Task<OperationResult<string>> Handle(CreateSpecializationCommand request, CancellationToken cancellationToken)
        {
            var specialization = await _specializationRepository.GetAllAsync();
            if (specialization.Any(x => x.Name == request.SpecializationName))
            {
                throw new DbErrorException("A specialization with the same Name already exists.");
            }

            var Specialization = Domain.MasterData.DoctorsSpecialization.Specialization.Create(Ulid.NewUlid().ToString(),  
                request.SpecializationName.ToLower() , 0, request.Code ,request.Description, request.ConsultationCost);

            await _specializationRepository.AddAsync(Specialization);
            return OperationResult<string>.Success(Specialization.Id);

        }
         

    }
    public class CreateSpecializationCommandValidator : AbstractValidator<CreateSpecializationCommand>
    {
        public CreateSpecializationCommandValidator()
        {
            RuleFor(x => x.SpecializationName)
                .NotEmpty().WithMessage("Specialization Name is required.")
                .MaximumLength(100).WithMessage("Specialization Name must not exceed 100 characters.");

            RuleFor(x => x.Description).NotEmpty()
                .MaximumLength(1000).WithMessage("Description must not exceed 500 characters.");

            RuleFor(x => x.ConsultationCost)
     .GreaterThan(0).WithMessage("Consultation Cost must be greater than 0.")
     .Must(HaveValidDecimalPlaces).WithMessage("Consultation Cost must have up to 2 decimal places.");


        }
        private bool HaveValidDecimalPlaces(double cost)
        {
            return Math.Round(cost, 2) == cost;
        }
    }
}
