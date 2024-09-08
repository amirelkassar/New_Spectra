using MediatR;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.DiagnoseCommend;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class DeleteDiagnoseCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }
    public class DeleteDiagnoseCommandHandler : IRequestHandler<DeleteDiagnoseCommand, Unit>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;

        public DeleteDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }

        public async Task<Unit> Handle(DeleteDiagnoseCommand request, CancellationToken cancellationToken)
        {
            var diagnoses = await _diagnoseRepository.GetByIdAsync(request.Id);
            if (diagnoses == null)
            {
                throw new Exception("Diagnose not found");
            }

            await _diagnoseRepository.DeleteAsync(diagnoses);
            return Unit.Value;
        }
    }

}
