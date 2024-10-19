using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class DeleteGeneralComplaintsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteGeneralComplaintsCommandHandler : IRequestHandler<DeleteGeneralComplaintsCommand, OperationResult<Unit>>
    {
        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public DeleteGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {

            var generalComplaint = await _generalComplaintRepository.GetByIdAsync(request.Id);

            var names = await _generalComplaintRepository.GetAllAsync(b => b.ComplaintName == generalComplaint.ComplaintName);
            if (names != null)
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }
            await _generalComplaintRepository.DeleteAsync(generalComplaint);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
