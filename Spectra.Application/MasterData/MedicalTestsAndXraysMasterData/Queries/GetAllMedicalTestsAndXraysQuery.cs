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

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetAllMedicalTestsAndXraysQuery : IRequest<OperationResult<IEnumerable<MedicalTestsAndXray>>>
    {

    }

    public class GetAllMedicalTestsAndXraysQueryHandler : IRequestHandler<GetAllMedicalTestsAndXraysQuery, OperationResult<IEnumerable<MedicalTestsAndXray>>>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
        public GetAllMedicalTestsAndXraysQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }
        public async Task<OperationResult<IEnumerable<MedicalTestsAndXray>>> Handle(GetAllMedicalTestsAndXraysQuery request, CancellationToken cancellationToken)
        {
          
                var medicalTestsAndXray = await _medicalTestsAndXrayRepository.GetAllAsync();

                return OperationResult<IEnumerable<MedicalTestsAndXray>>.Success(medicalTestsAndXray);
         
          
        }
    }
}
