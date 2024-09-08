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

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetAllMedicalTestsAndXraysQuery : IRequest<IEnumerable<MedicalTestsAndXrays>>
    {

    }

    public class GetAllMedicalTestsAndXraysQueryHandler : IRequestHandler<GetAllMedicalTestsAndXraysQuery, IEnumerable<MedicalTestsAndXrays>>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
        public GetAllMedicalTestsAndXraysQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }
        public async Task<IEnumerable<MedicalTestsAndXrays>> Handle(GetAllMedicalTestsAndXraysQuery request, CancellationToken cancellationToken)
        {
            var medicalTestsAndXray = await _medicalTestsAndXrayRepository.GetAllAsync();
            return medicalTestsAndXray;
        }
    }
}
