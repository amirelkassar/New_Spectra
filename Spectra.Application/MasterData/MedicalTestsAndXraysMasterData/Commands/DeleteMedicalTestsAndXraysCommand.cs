using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class DeleteMedicalTestsAndXraysCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalTestsAndXraysCommandHandler(IBaseMongoDbRepository<MedicalTestAndXray> medicalTestsAndXrayRepository) : IRequestHandler<DeleteMedicalTestsAndXraysCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<MedicalTestAndXray> _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        public async Task<OperationResult> Handle(DeleteMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
            await _medicalTestsAndXrayRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }
}


