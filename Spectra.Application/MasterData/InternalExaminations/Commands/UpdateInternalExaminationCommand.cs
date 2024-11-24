using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class UpdateInternalExaminationCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
    }

    public class UpdateInternalExaminationCommandHandler : IRequestHandler<UpdateInternalExaminationCommand, OperationResult>
    {

        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public UpdateInternalExaminationCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult> Handle(UpdateInternalExaminationCommand request, CancellationToken cancellationToken)
        {

            var internalExamination = await _InternalExaminationRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("InternalExamination", nameof(request.Id));
            var names = await _InternalExaminationRepository.GetAllAsync(b => b.Name == request.Name && b.Id != request.Id);
            if (names.Any())
            {
                throw new AlreadyExistException(request.Name,nameof(request.Id));
            }
            internalExamination.Name = request.Name;
            internalExamination.Code = request.Code;

            await _InternalExaminationRepository.UpdateAsync(internalExamination);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }
    public class UpdateInternalExaminationCommandValidator : AbstractValidator<UpdateInternalExaminationCommand>
    {
        public UpdateInternalExaminationCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotNull()
                .NotEmpty();
        }

    }

}
