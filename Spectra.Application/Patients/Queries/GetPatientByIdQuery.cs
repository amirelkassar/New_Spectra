using MediatR;
using Spectra.Application.Clients;
using Spectra.Domain.Clients;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Patients.Queries
{
    public class GetPatientByIdQuery : IRequest<OperationResult<Patient>>
    {
        public string Id { get; set; }
    }

    public class GetPatientByIdQueryHandler : IRequestHandler<GetPatientByIdQuery, OperationResult<Patient>>
    {
        private readonly IPatientRepository _patientRepository;

        public GetPatientByIdQueryHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<OperationResult<Patient>> Handle(GetPatientByIdQuery request, CancellationToken cancellationToken)
        {
        

                var patient = await _patientRepository.GetByIdAsync(request.Id);


                if (patient == null)
                {
                    throw new NotFoundException("patient", request.Id);
                }

                return OperationResult<Patient>.Success(patient);
            
         
        }
    }
}
