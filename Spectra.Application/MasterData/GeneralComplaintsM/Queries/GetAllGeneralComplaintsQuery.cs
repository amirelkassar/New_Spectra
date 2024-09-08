using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.Clients;

using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetAllGeneralComplaintsQuery : IRequest<IEnumerable<GeneralComplaints>>
    {

    }

    public class GetAllGeneralComplaintsQueryHandler : IRequestHandler<GetAllGeneralComplaintsQuery, IEnumerable<GeneralComplaints>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetAllGeneralComplaintsQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<IEnumerable<GeneralComplaints>> Handle(GetAllGeneralComplaintsQuery request, CancellationToken cancellationToken)
        {
            var generalComplaint = await _generalComplaintRepository.GetAllAsync();
            return generalComplaint;
        }
    }
}
