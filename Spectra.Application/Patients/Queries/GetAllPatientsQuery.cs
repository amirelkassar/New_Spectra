using MediatR;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Patients.Queries
{
    public class GetAllPatientsQuery : IRequest<OperationResult<IEnumerable<Patient>>>
    {
    }

    public class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, OperationResult<IEnumerable<Patient>>>
    {
        private readonly IPatientRepository _patientRepository;

        public GetAllPatientsQueryHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<OperationResult<IEnumerable<Patient>>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
        {
            await _patientRepository.GetAllAsync();


            var patient = await _patientRepository.GetAllAsync(); ;

            return OperationResult<IEnumerable<Patient>>.Success(patient);

        }
    }
}
