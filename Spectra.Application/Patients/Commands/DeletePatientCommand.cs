using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Patients.Commands
{
    public class DeletePatientCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeletePatientCommandHandler : IRequestHandler<DeletePatientCommand, OperationResult<Unit>>
    {
        private readonly IPatientRepository _patientRepository;

        public DeletePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeletePatientCommand request, CancellationToken cancellationToken)
        {
           
            var patient = await _patientRepository.GetByIdAsync(request.Id);
            if (patient == null)
            {
                throw new Exception("Patient not found");
            }

            await _patientRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);
        

         
}
    }
}
