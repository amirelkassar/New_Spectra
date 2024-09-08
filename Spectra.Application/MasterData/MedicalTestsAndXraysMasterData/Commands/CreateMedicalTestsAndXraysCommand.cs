using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class CreateMedicalTestsAndXraysCommand : ICommand<string>
    {
        public string ScientificName { get; set; }

        public string Notes { get; set; }
        public ExaminationType ExaminationTypes { get; set; }


    }


    
    public class CreateMedicalTestsAndXraysCommandHandler : IRequestHandler<CreateMedicalTestsAndXraysCommand, string>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public CreateMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }

        public async Task<string> Handle(CreateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {

            var MedicalTestsAndXray = MedicalTestsAndXrays.Create(

                Ulid.NewUlid().ToString(),
                request.ScientificName, request.Notes, request.ExaminationTypes
                );
            await _medicalTestsAndXrayRepository.AddAsync(MedicalTestsAndXray);
            return MedicalTestsAndXray.Id;
        }
    }
}