using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;



namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{

    public class CreateSpecializationCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }
        public string? Description { get; set; }
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
            var exists = await _specializationRepository.GetAllAsync(x => x.Name == request.Name);
            if (exists.Any())
            {
                throw new AlreadyExistException(request.Name,nameof(request.Name));
            }

            var Specialization = Domain.MasterData.DoctorsSpecialization.Specialization.Create(
                Ulid.NewUlid().ToString(),
                request.Name);
            Specialization.Description=request.Description;
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
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

        }
    }
}
