using MediatR;
using Spectra.Application.Clients;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.MasterData.InternalExaminations;

namespace Spectra.Application.MasterData.InternalExaminations.Queries
{

    public class GetAllInternalExaminationQuery : IRequest<OperationResult<IEnumerable<InternalExamination>>>
    {

    }

    public class GetAllInternalExaminationQueryHandler : IRequestHandler<GetAllInternalExaminationQuery, OperationResult<IEnumerable<InternalExamination>>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public GetAllInternalExaminationQueryHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<IEnumerable<InternalExamination>>> Handle(GetAllInternalExaminationQuery request, CancellationToken cancellationToken)
        {
          
                var entity = await _InternalExaminationRepository.GetAllAsync();

                return OperationResult<IEnumerable<InternalExamination>>.Success(entity);
         
          
        }
    }
}
