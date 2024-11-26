using FluentValidation;
using MediatR;

using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class CreateInternalExaminationCommand : ICommand<OperationResult>
    {
        public string Name { get; set; }
        public string? Code { get; set; }
    }

    public class CreateInternalExaminationsCommandHandler(IInternalExaminationRepository internalExaminationRepository) : IRequestHandler<CreateInternalExaminationCommand, OperationResult>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository = internalExaminationRepository;

        public async Task<OperationResult> Handle(CreateInternalExaminationCommand request, CancellationToken cancellationToken)
        {

            var internalExamination = InternalExamination.Create(Ulid.NewUlid().ToString(),
                request.Name, request.Code);
            await _InternalExaminationRepository.AddAsync(internalExamination);
            return OperationResult<string>.Success(internalExamination.Id);
        }
    }
    public class CreateInternalExaminationValidator : AbstractValidator<CreateInternalExaminationCommand>
    {
        public CreateInternalExaminationValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();
        }
    }
}