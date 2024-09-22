using FluentValidation;
using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class CreateMedicalTestsAndXraysCommand : ICommand<OperationResult<string>>
    {
        public string ScientificName { get; set; }

        public string Notes { get; set; }
        public ExaminationType ExaminationTypes { get; set; }


    }



    public class CreateMedicalTestsAndXraysCommandHandler : IRequestHandler<CreateMedicalTestsAndXraysCommand, OperationResult<string>>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public CreateMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
          
                var MedicalTestsAndXray = Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray.Create(

                    Ulid.NewUlid().ToString(),
                    request.ScientificName, request.Notes, request.ExaminationTypes
                    );
                await _medicalTestsAndXrayRepository.AddAsync(MedicalTestsAndXray);
                return OperationResult<string>.Success(MedicalTestsAndXray.Id);

         
          
        }
    }
    public class CreateMedicalTestsAndXraysCommandValidator : AbstractValidator<CreateMedicalTestsAndXraysCommand>
    {
        public CreateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.ScientificName)
                .NotEmpty().WithMessage("Scientific Name is required.")
                .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");

            RuleFor(x => x.Notes)
                .MaximumLength(500).WithMessage("Notes must not exceed 500 characters.");

            RuleFor(x => x.ExaminationTypes)
                .IsInEnum().WithMessage("Invalid Examination Type.");
        }
    }
}