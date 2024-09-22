using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{

    public class GetAllDiagnoseQuery : IRequest<OperationResult<IEnumerable<Diagnose>>>
    {

    }

    public class  GetAllDiagnoseQueryHandler : IRequestHandler<GetAllDiagnoseQuery, OperationResult<IEnumerable<Diagnose>>>
    {


        private readonly IDiagnoseRepository _diagnoseRepository;

        public GetAllDiagnoseQueryHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }
        public async Task<OperationResult<IEnumerable<Diagnose>>> Handle(GetAllDiagnoseQuery request, CancellationToken cancellationToken)
        {
          
                var drugs = await _diagnoseRepository.GetAllAsync(); 

                return OperationResult<IEnumerable<Diagnose>>.Success(drugs);
            
 

        }
    }
    }


