using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class CreateMedicalTestsAndXraysCommand : ICommand<OperationResult<string>>
    {
        public string ScientificNameEng { get; set; }

        public string Notes { get; set; }
        public string ScientificNameByEngByArab { get; set; }

        public string Code { get; set; }
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

            var names = await _medicalTestsAndXrayRepository.GetAllAsync(b => b.ScientificNameByEng == request.ScientificNameEng);
            if (names.Any())
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }
            var MedicalTestsAndXray = Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray.Create(

                    Ulid.NewUlid().ToString(),
           request.ScientificNameEng, request.Notes, request.ExaminationTypes, request.ScientificNameByEngByArab, request.Code
                    );
            await _medicalTestsAndXrayRepository.AddAsync(MedicalTestsAndXray);
            return OperationResult<string>.Success(MedicalTestsAndXray.Id);



        }
    }
    public class CreateMedicalTestsAndXraysCommandValidator : AbstractValidator<CreateMedicalTestsAndXraysCommand>
    {
        public CreateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.ScientificNameEng)
                .NotEmpty().WithMessage("Scientific Name is required.")
                .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");
            RuleFor(x => x.Code)
           .NotEmpty().WithMessage("Code is required.")
           .MaximumLength(100).WithMessage("Code Name must not exceed 100 characters.");
            RuleFor(x => x.ScientificNameByEngByArab)
               .NotEmpty().WithMessage("Scientific Name is required.")
               .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");

            RuleFor(x => x.Notes)
                .MaximumLength(500).WithMessage("Notes must not exceed 500 characters.");
            RuleFor(x => x.ExaminationTypes)
                .IsInEnum().WithMessage("Invalid Examination Type.");

        }
    }
}