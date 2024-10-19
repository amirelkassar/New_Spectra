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
using FluentValidation;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class UpdateMedicalTestsAndXraysCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
<<<<<<< HEAD
        public string ScientificName { get; set; }
=======
        public string ScientificNameByEng { get; set; }
        public string ScientificNameByEngByArab { get; set; }
        public string Code { get; set; }
>>>>>>> Admin-BackEnd

        public string Notes { get; set; }
        public ExaminationType ExaminationTypes { get; set; }

    }

    public class UpdateMedicalTestsAndXraysCommandHandler : IRequestHandler<UpdateMedicalTestsAndXraysCommand, OperationResult<Unit>>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public UpdateMedicalTestsAndXraysCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }


        public async Task<OperationResult<Unit>> Handle(UpdateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
           
            var medicalTestsAndXrys = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id);
<<<<<<< HEAD
          

            medicalTestsAndXrys.ScientificName = request.ScientificName;
=======
       

            medicalTestsAndXrys.ScientificNameByEng = request.ScientificNameByEng;
            medicalTestsAndXrys.ScientificNameByEngByArab = request.ScientificNameByEngByArab;
            medicalTestsAndXrys.Code = request.Code;

>>>>>>> Admin-BackEnd
            medicalTestsAndXrys.Notes = request.Notes;
            medicalTestsAndXrys.ExaminationTypes = request.ExaminationTypes;

            await _medicalTestsAndXrayRepository.UpdateAsync(medicalTestsAndXrys);
            return OperationResult<Unit>.Success(Unit.Value);
       
}

    }
    public class UpdateMedicalTestsAndXraysCommandValidator : AbstractValidator<UpdateMedicalTestsAndXraysCommand>
    {
        public UpdateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id is required.");

<<<<<<< HEAD
            RuleFor(x => x.ScientificName)
=======
            RuleFor(x => x.ScientificNameByEng)
                .NotEmpty().WithMessage("Scientific Name is required.")
                .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");
            RuleFor(x => x.ScientificNameByEngByArab)
>>>>>>> Admin-BackEnd
                .NotEmpty().WithMessage("Scientific Name is required.")
                .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");

            RuleFor(x => x.Notes)
                .MaximumLength(500).WithMessage("Notes must not exceed 500 characters.");

            RuleFor(x => x.ExaminationTypes)
                .IsInEnum().WithMessage("Invalid Examination Type.");
<<<<<<< HEAD
=======
            RuleFor(x => x.Code)
          .NotEmpty().WithMessage("Code is required.")
          .MaximumLength(100).WithMessage("Code Name must not exceed 100 characters.");

>>>>>>> Admin-BackEnd
        }
    }
}
