using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.Clients;

using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetAllGeneralComplaintsQuery : IRequest<OperationResult<IEnumerable<GeneralComplaint>>>
    {

    }

    public class GetAllGeneralComplaintsQueryHandler : IRequestHandler<GetAllGeneralComplaintsQuery, OperationResult<IEnumerable<GeneralComplaint>>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetAllGeneralComplaintsQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult<IEnumerable<GeneralComplaint>>> Handle(GetAllGeneralComplaintsQuery request, CancellationToken cancellationToken)
        {
           
         
                var generalComplaint = await _generalComplaintRepository.GetAllAsync();

                return OperationResult<IEnumerable<GeneralComplaint>>.Success(generalComplaint);
  
        }
    }
}
