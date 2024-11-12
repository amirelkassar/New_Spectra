using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{

    public class GetDiagnoseByIdQuery : IRequest<OperationResult<Diagnose>>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetDiagnoseByIdQuery, OperationResult<Diagnose>>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;

        public GetDiagnoseByIdQueryHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }
        public async Task<OperationResult<Diagnose>> Handle(GetDiagnoseByIdQuery request, CancellationToken cancellationToken)
        {
          
                var diagnose = await _diagnoseRepository.GetByIdAsync(request.Id);
                if (diagnose== null )
                {
                    throw new NotFoundException("Diagnos", request.Id);
                }

                return OperationResult<Diagnose>.Success(diagnose);
            
           
        }
    }
}
