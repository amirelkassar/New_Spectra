using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class UpdateDiagnoseCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Code1 { get; set; }
        public string? Code2 { get; set; }
        public string? Code3 { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
    }

    public class UpdateDiagnoseCommandHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository) : IRequestHandler<UpdateDiagnoseCommand, OperationResult<Unit>>
    {

        private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository = diagnoseRepository;

        public async Task<OperationResult<Unit>> Handle(UpdateDiagnoseCommand request, CancellationToken cancellationToken)
        {
            var Diagnose = await _diagnoseRepository.GetByIdAsync(request.Id);
            var check = await _diagnoseRepository.Exists(b => b.Name == request.Name && b.Id != request.Id);
            if (check)
            {
                throw new AlreadyExistException(request.Name, nameof(request.Name));
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
              .NotNull();

            RuleFor(x => x.Name)
              .NotEmpty()
              .NotNull();

            RuleFor(x => x.Code1)
              .NotEmpty()
              .NotNull();
        }
    }
}
