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
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class UpdateInternalExaminationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public string Code { get; set; }
        public List<string> ExaminationTypes { get; set; }


    }

    public class UpdateInternalExaminationCommandHandler : IRequestHandler<UpdateInternalExaminationCommand, OperationResult<Unit>>
    {

        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public UpdateInternalExaminationCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateInternalExaminationCommand request, CancellationToken cancellationToken)
        {
           
            var internalExamination = await _InternalExaminationRepository.GetByIdAsync(request.Id);
       
            var names = await _InternalExaminationRepository.GetAllAsync(b => b.Name == request.Name && b.Id != request.Id);
            if (names.Any()){
                throw new DbErrorException(" this's Name is a ready exists");
            }

            internalExamination.Name = request.Name;
            internalExamination.Code = request.Code;
            internalExamination.ExaminationTypes = request.ExaminationTypes;

            await _InternalExaminationRepository.UpdateAsync(internalExamination);
            return OperationResult<Unit>.Success(Unit.Value);
       
}



    }
    public class UpdateInternalExaminationCommandValidator : AbstractValidator<UpdateInternalExaminationCommand>
    {
        public UpdateInternalExaminationCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Specialization Name is required.")
                .MaximumLength(100).WithMessage("Internal Examination Name must not exceed 100 characters.");
            RuleFor(x => x.Code)
            .NotEmpty().WithMessage("Code is required.")
            .MaximumLength(100).WithMessage("Code must not exceed 100 characters.");

            RuleFor(x => x.ExaminationTypes)
                .Must(sections => sections == null || sections.Count > 0)
                .WithMessage("If provided, Examination Types must contain at least one item.");



        }

    }

}
