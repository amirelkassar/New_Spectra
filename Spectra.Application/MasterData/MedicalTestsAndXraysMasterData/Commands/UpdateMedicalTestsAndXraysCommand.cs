using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class UpdateMedicalTestsAndXraysCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string ScientificName { get; set; }

        public string Notes { get; set; }
        public ExaminationType ExaminationTypes { get; set; }

    }

    public class UpdateMedicalTestsAndXraysCommandHandler : IRequestHandler<UpdateMedicalTestsAndXraysCommand, Unit>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public UpdateMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }


        public async Task<Unit> Handle(UpdateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {

            var medicalTestsAndXrys = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
            if (medicalTestsAndXrys == null)
            {
                throw new Exception("Examination Type Not found");
            }

            medicalTestsAndXrys.ScientificName = request.ScientificName;
            medicalTestsAndXrys.Notes = request.Notes;
            medicalTestsAndXrys.ExaminationTypes = request.ExaminationTypes;

            await _medicalTestsAndXrayRepository.UpdateAsync(medicalTestsAndXrys);
            return Unit.Value;
        }

    }
}
