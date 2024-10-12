using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetGeneralComplaintsByIdQuery : IRequest<OperationResult<GeneralComplaint>>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetGeneralComplaintsByIdQuery, OperationResult<GeneralComplaint>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetDiagnoseByIdQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult<GeneralComplaint>> Handle(GetGeneralComplaintsByIdQuery request, CancellationToken cancellationToken)
        {


     
                var entitiy = await _generalComplaintRepository.GetByIdAsync(request.Id);
                if (entitiy == null)
                {
                    throw new NotFoundException("GeneralComplaint", request.Id);
                }

                return OperationResult<GeneralComplaint>.Success(entitiy);
 
      
        }
    }
}
