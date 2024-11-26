using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class DeleteMedicalTestsAndXraysCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository) : IRequestHandler<DeleteMedicalTestsAndXraysCommand, OperationResult>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        public async Task<OperationResult> Handle(DeleteMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
            var medicalTestsAndXrayRepository = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
            await _medicalTestsAndXrayRepository.DeleteAsync(medicalTestsAndXrayRepository);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }
}


