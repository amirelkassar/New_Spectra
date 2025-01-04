using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class DeleteDiagnoseCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteDiagnoseCommandHandler : IRequestHandler<DeleteDiagnoseCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository;

        public DeleteDiagnoseCommandHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteDiagnoseCommand request, CancellationToken cancellationToken)
        {
            await _diagnoseRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);
        }




    }

}
