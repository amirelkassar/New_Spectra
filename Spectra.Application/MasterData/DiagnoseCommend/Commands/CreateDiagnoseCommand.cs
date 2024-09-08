using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Commands;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class CreateDiagnoseCommand : ICommand<string>
    {
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }

        public string DiagnosisName { get; set; }


        public string DiagnosisDescription { get; set; }


    }



    public class CreateDiagnoseCommandHandler : IRequestHandler<CreateDiagnoseCommand, string>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;

        public CreateDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {

            _diagnoseRepository = diagnoseRepository;
        }

        public async Task<string> Handle(CreateDiagnoseCommand request, CancellationToken cancellationToken)
        {

            var diagnose = Diagnose.Create(

                Ulid.NewUlid().ToString(),
                request.Code1,
                request.Code2,
                request.Code3,


                request.DiagnosisDescription, request.DiagnosisName
                );
            await _diagnoseRepository.AddAsync(diagnose);
            return diagnose.Id;
        }
    }
}