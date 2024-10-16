using MediatR;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Spectra.Application.MasterData.GeneralComplaintsM;
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
        

            await _generalComplaintRepository.DeleteAsync(generalComplaint);
            return OperationResult<Unit>.Success(Unit.Value);
       
}
    }

}
