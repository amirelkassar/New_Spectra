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


namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class DeleteGeneralComplaintsCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }
    public class DeleteGeneralComplaintsCommandHandler : IRequestHandler<DeleteGeneralComplaintsCommand, Unit>
    {
        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public DeleteGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }



        public async Task<Unit> Handle(DeleteGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
            var generalComplaint = await _generalComplaintRepository.GetByIdAsync(request.Id);
            if (generalComplaint == null)
            {
                throw new Exception(" General Complaint not found");
            }

            await _generalComplaintRepository.DeleteAsync(generalComplaint);
            return Unit.Value;
        }
    }

}
