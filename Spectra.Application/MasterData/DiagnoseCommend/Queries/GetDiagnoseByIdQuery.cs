using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Diagnoses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{

    public class GetDiagnoseByIdQuery : IRequest<Diagnose>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetDiagnoseByIdQuery, Diagnose>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;

        public GetDiagnoseByIdQueryHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }
        public async Task<Diagnose> Handle(GetDiagnoseByIdQuery request, CancellationToken cancellationToken)
        {

            return await _diagnoseRepository.GetByIdAsync(request.Id);
        }
    }
}
