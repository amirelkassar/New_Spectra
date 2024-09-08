using MediatR;
using Spectra.Application.Clients;
using Spectra.Domain.Clients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetMedicalTestsAndXraysByIdQuery : IRequest<MedicalTestsAndXrays>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetMedicalTestsAndXraysByIdQuery, MedicalTestsAndXrays>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public GetDiagnoseByIdQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        }
        public async Task<MedicalTestsAndXrays> Handle(GetMedicalTestsAndXraysByIdQuery request, CancellationToken cancellationToken)
        {

            return await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
        }
    }
}
