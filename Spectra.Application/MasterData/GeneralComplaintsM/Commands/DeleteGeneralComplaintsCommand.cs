using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class DeleteGeneralComplaintsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteGeneralComplaintsCommandHandler : IRequestHandler<DeleteGeneralComplaintsCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<GeneralComplaint> _generalComplaintRepository;

        public DeleteGeneralComplaintsCommandHandler(IBaseMongoDbRepository<GeneralComplaint> generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
            await _generalComplaintRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
