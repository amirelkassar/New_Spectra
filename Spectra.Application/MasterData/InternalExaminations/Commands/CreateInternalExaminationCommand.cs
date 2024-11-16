using FluentValidation;
using MediatR;

using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class CreateInternalExaminationCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }

        public string Code { get; set; }
        public List<string> ExaminationTypes { get; set; }


    }


    public class CreateInternalExaminationsCommandHandler : IRequestHandler<CreateInternalExaminationCommand, OperationResult<string>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public CreateInternalExaminationsCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateInternalExaminationCommand request, CancellationToken cancellationToken)
        {

            var internalExamination = InternalExamination.Create(

                Ulid.NewUlid().ToString(),
                request.Name, request.Code, request.ExaminationTypes
                );
            await _InternalExaminationRepository.AddAsync(internalExamination);
            return OperationResult<string>.Success(internalExamination.Id);



        }
    }
    public class CreateInternalExaminationValidator : AbstractValidator<CreateInternalExaminationCommand>
    {
        public CreateInternalExaminationValidator()
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