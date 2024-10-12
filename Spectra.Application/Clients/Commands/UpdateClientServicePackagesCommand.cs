using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Commands
{
    public class UpdateClientServicePackagesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public List<ServicePackage> ServicePackages { get; set; }
    }

    public class UpdateClientServicePackagesCommandHandler : IRequestHandler<UpdateClientServicePackagesCommand, OperationResult<Unit>>
    {
        private readonly IClientRepository _clientRepository;

        public UpdateClientServicePackagesCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateClientServicePackagesCommand request, CancellationToken cancellationToken)
        {

            var client = await _clientRepository.GetByIdAsync(request.Id);


         
            client.ServicePackages = request.ServicePackages;
         


            await _clientRepository.UpdateAsync(client);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }
  
       
}
