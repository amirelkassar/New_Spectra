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
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class DeleteDiagnoseCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteDiagnoseCommandHandler : IRequestHandler<DeleteDiagnoseCommand, OperationResult<Unit>>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;

        public DeleteDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteDiagnoseCommand request, CancellationToken cancellationToken)
        {

            var diagnoses = await _diagnoseRepository.GetByIdAsync(request.Id);


            await _diagnoseRepository.DeleteAsync(diagnoses);
            return OperationResult<Unit>.Success(Unit.Value);
        }
            


       
    }

}
