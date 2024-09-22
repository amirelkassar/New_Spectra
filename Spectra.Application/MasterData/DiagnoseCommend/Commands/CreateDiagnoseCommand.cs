using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class CreateDiagnoseCommand : ICommand<OperationResult<string>>
    {
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }


    }



    public class CreateDiagnoseCommandHandler : IRequestHandler<CreateDiagnoseCommand, OperationResult<string>>
    {
        private readonly IDiagnoseRepository _diagnoseRepository;


        public CreateDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {

            _diagnoseRepository = diagnoseRepository;

        }

        public async Task<OperationResult<string>> Handle(CreateDiagnoseCommand request, CancellationToken cancellationToken)
        {
   
            var diagnose = Diagnose.Create(

                Ulid.NewUlid().ToString(),
                request.Code1,
                request.Code2,
                request.Code3,
                request.Name,
                request.Description

                );

            await _diagnoseRepository.AddAsync(diagnose);

            return OperationResult<string>.Success(diagnose.Id);
        }
    }

    public class CreateDiagnoseCommandValidator : AbstractValidator<CreateDiagnoseCommand>
    {
        public CreateDiagnoseCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Diagnosis name is required.")
                .MaximumLength(100).WithMessage("Diagnosis name must not exceed 100 characters.");
            RuleFor(x => x.Code1)
              .MaximumLength(10).WithMessage("Code1 name must not exceed 10 characters.");
            RuleFor(x => x.Code2)
         .MaximumLength(10).WithMessage("Code1 name must not exceed 10 characters.");
            RuleFor(x => x.Code3)
             .MaximumLength(10).WithMessage("Code1 name must not exceed 10 characters.");
            RuleFor(x => x.Description)
            .NotEmpty().WithMessage("Diagnosis description is required.")
            .MaximumLength(500).WithMessage("Diagnosis description must not exceed 500 characters.");
        }
    }
}
