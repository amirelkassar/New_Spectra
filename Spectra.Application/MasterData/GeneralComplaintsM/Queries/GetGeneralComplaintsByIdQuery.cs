using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.GeneralComplaints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetGeneralComplaintsByIdQuery : IRequest<GeneralComplaints>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetGeneralComplaintsByIdQuery, GeneralComplaints>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetDiagnoseByIdQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<GeneralComplaints> Handle(GetGeneralComplaintsByIdQuery request, CancellationToken cancellationToken)
        {

            return await _generalComplaintRepository.GetByIdAsync(request.Id);
        }
    }
}
