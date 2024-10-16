using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class UpdateDiagnoseCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
    }

    public class UpdateDiagnoseCommandHandler : IRequestHandler<UpdateDiagnoseCommand, OperationResult<Unit>>
    {

        private readonly IDiagnoseRepository _diagnoseRepository;
        
        public UpdateDiagnoseCommandHandler(IDiagnoseRepository diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
            
        }

        public async Task <OperationResult<Unit>> Handle(UpdateDiagnoseCommand request, CancellationToken cancellationToken)
        {
          
                var Diagnose = await _diagnoseRepository.GetByIdAsync(request.Id);
            if (Diagnose == null)
            {
                throw new NotFoundException("Diagnos", request.Id);
            }


            Diagnose.Code1 = request.Code1;
            Diagnose.Code2 = request.Code2;
            Diagnose.Code3 = request.Code3;
            Diagnose.Description = request.Description;
            Diagnose.Name = request.Name;

           
                await _diagnoseRepository.UpdateAsync(Diagnose);
                return OperationResult<Unit>.Success(Unit.Value);
            
          

        }

    }
    public class UpdateDiagnoseCommandValidator : AbstractValidator<UpdateDiagnoseCommand>
    {
        public UpdateDiagnoseCommandValidator()
        {
            RuleFor(x => x.Id)
          .NotEmpty()
          .WithMessage("Id is required.");
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
