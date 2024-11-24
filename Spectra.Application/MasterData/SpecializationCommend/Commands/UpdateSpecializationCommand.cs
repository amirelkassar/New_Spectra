using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{


    public class UpdateSpecializationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Code { get; set; }
        public double? ConsultationCost { get; set; }

    }

    public class UpdateSpecializationCommandHandler : IRequestHandler<UpdateSpecializationCommand, OperationResult<Unit>>
    {
        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IValidator<UpdateSpecializationCommand> updateValidator;
        public UpdateSpecializationCommandHandler(ISpecializationsRepository specializationRepository, IValidator<UpdateSpecializationCommand> updateValidator)
        {
            _specializationRepository = specializationRepository;
            updateValidator = updateValidator;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateSpecializationCommand request, CancellationToken cancellationToken)
        {

            var Specializations = await _specializationRepository.GetByIdAsync(request.Id);


            var names = await _specializationRepository.GetAllAsync(b => b.Name == request.Name && b.Id != request.Id);
            if (names.Any())
            {
                throw new NotFoundException("Specializations",request.Id);
            }
            Specializations.Name = request.Name;
            Specializations.Description = request.Description;
            Specializations.Code = request.Code;
            Specializations.ConsultationCost = request.ConsultationCost;


            await _specializationRepository.UpdateAsync(Specializations);
            return OperationResult<Unit>.Success(Unit.Value);
        }

    }

    public class UpdateSpecializationCommandValidator : AbstractValidator<UpdateSpecializationCommand>
    {
        public UpdateSpecializationCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id is required.");

            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

        }
    }
}

