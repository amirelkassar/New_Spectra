using MediatR;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class UpdateDiagnoseCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string DiagnosisName { get; set; }

        public string DiagnosisDescription { get; set; }
    }

    public class UpdateDiagnoseCommandHandler : IRequestHandler<UpdateDiagnoseCommand, Unit>
    {

        private readonly IDiagnoseRepository _diagnoseRepository;

        public UpdateDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }

        public async Task<Unit> Handle(UpdateDiagnoseCommand request, CancellationToken cancellationToken)
        {

            var Diagnose = await _diagnoseRepository.GetByIdAsync(request.Id);
            if (Diagnose == null)
            {
                throw new Exception("Diagnose not found");
            }
            Diagnose.Code1 = request.Code1;
            Diagnose.Code2 = request.Code2;
            Diagnose.Code3 = request.Code3;
            Diagnose.DiagnosisDescription = request.DiagnosisDescription;
            Diagnose.DiagnosisName = request.DiagnosisName;

            await _diagnoseRepository.UpdateAsync(Diagnose);
            return Unit.Value;
        }

    }
}
