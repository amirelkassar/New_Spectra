using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Clients.Commands
{
    public class UpdateClientPatientCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public List<Patient> Patients { get; set; }
    }

    public class UpdateClientPatientCommandHandler : IRequestHandler<UpdateClientPatientCommand, OperationResult<Unit>>
    {
        private readonly IClientRepository _clientRepository;



        public async Task<OperationResult<Unit>> Handle(UpdateClientPatientCommand request, CancellationToken cancellationToken)
        {

            var client = await _clientRepository.GetByIdAsync(request.Id);



            client.Patients = request.Patients;



            await _clientRepository.UpdateAsync(client);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }


}
