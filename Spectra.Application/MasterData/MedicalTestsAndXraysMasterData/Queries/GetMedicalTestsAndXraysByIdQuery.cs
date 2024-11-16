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
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetMedicalTestsAndXraysByIdQuery : IRequest<OperationResult<MedicalTestsAndXray>>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetMedicalTestsAndXraysByIdQuery, OperationResult<MedicalTestsAndXray>>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public GetDiagnoseByIdQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        }
        public async Task<OperationResult<MedicalTestsAndXray>> Handle(GetMedicalTestsAndXraysByIdQuery request, CancellationToken cancellationToken)
        {


          
                var entitiy = await  _medicalTestsAndXrayRepository.GetByIdAsync(request.Id); ;
                if (entitiy == null)
                {
                    throw new NotFoundException("medicalTestsAndXray", request.Id);
                }

                return OperationResult<MedicalTestsAndXray>.Success(entitiy);
            
          
        }
    }
}
