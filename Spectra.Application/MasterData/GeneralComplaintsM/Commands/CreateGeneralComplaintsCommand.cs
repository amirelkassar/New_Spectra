using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class CreateGeneralComplaintsCommand : ICommand<string>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }

        public string DescriptionOfTheComplaint { get; set; }

       
    }



    public class CreateGeneralComplaintsCommandHandler : IRequestHandler<CreateGeneralComplaintsCommand, string>
    {
        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public CreateGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<string> Handle(CreateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {

            var generalComplaint = GeneralComplaints.Create(

                Ulid.NewUlid().ToString(),

                request.ComplaintName,request.Code1, request.DescriptionOfTheComplaint
                );
            await _generalComplaintRepository.AddAsync(generalComplaint);
            return generalComplaint.Id;
        }
    }
}