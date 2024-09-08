using MediatR;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;


namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class DeleteMedicalTestsAndXraysCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalTestsAndXraysCommandHandler : IRequestHandler<DeleteMedicalTestsAndXraysCommand, Unit>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public DeleteMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }


        public async Task<Unit> Handle(DeleteMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
            var medicalTestsAndXrayRepository = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
            if (medicalTestsAndXrayRepository == null)
            {
                throw new Exception("Examination Type not found");
            }

            await _medicalTestsAndXrayRepository.DeleteAsync(medicalTestsAndXrayRepository);
            return Unit.Value;
        }
    }

}
