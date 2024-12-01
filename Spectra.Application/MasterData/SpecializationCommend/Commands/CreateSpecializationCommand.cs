using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;



namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{

    public class CreateSpecializationCommand : ICommand<OperationResult<string>>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? Code { get; set; }
        public double? ConsultationCost { get; set; }
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
            var exists = await _specializationRepository.GetAllAsync(x => x.EnName == request.EnName);
            if (exists.Any())
            {
                throw new AlreadyExistException(request.EnName, nameof(request.EnName));
            }

            var Specialization = Domain.MasterData.DoctorsSpecialization.Specialization.Create(
                Ulid.NewUlid().ToString(),
                request.EnName,
                request.ArName);
            Specialization.EnDescription = request.EnDescription;
            Specialization.ArDescription = request.ArDescription;
            Specialization.Code = request.Code;
            Specialization.ConsultationCost = request.ConsultationCost;

            await _specializationRepository.AddAsync(Specialization);
            return OperationResult<string>.Success(Specialization.Id);

        }


    }
    public class CreateSpecializationCommandValidator : AbstractValidator<CreateSpecializationCommand>
    {
        public CreateSpecializationCommandValidator()
        {
            RuleFor(x => x.EnName)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.ArName)
                .NotEmpty()
                .NotNull();

        }
    }
}
