using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class UpdateMedicalTestsAndXraysCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string? Code { get; set; }
        public ExaminationType ExaminationTypes { get; set; }
    }

    public class UpdateMedicalTestsAndXraysCommandHandler : IRequestHandler<UpdateMedicalTestsAndXraysCommand, OperationResult>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public UpdateMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }


        public async Task<OperationResult> Handle(UpdateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {

            var medicalTestsAndXrys = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
            var names = await _medicalTestsAndXrayRepository.GetAllAsync(b => b.Name.ToLower() == request.Name.ToLower() && b.Id != request.Id);
            if (names.Any())
            {
                throw new AlreadyExistException(request.Name, nameof(request.Name));
            }

            medicalTestsAndXrys.Name= request.Name;
            medicalTestsAndXrys.Code= request.Code;
            medicalTestsAndXrys.ExaminationTypes = request.ExaminationTypes;

            await _medicalTestsAndXrayRepository.UpdateAsync(medicalTestsAndXrys);
            return OperationResult<Unit>.Success(Unit.Value);

        }

    }
    public class UpdateMedicalTestsAndXraysCommandValidator : AbstractValidator<UpdateMedicalTestsAndXraysCommand>
    {
        public UpdateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Code)
               .NotEmpty()
               .NotNull();

            RuleFor(x => x.ExaminationTypes)
               .NotEmpty()
               .NotNull();

        }
    }
}
