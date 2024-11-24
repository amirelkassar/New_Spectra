using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class CreateDiagnoseCommand : ICommand<OperationResult>
    {
        public string Code1 { get; set; }
        public string? Code2 { get; set; }
        public string? Code3 { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
    }

    public class CreateDiagnoseCommandHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository) : IRequestHandler<CreateDiagnoseCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository = diagnoseRepository;

        public async Task<OperationResult> Handle(CreateDiagnoseCommand request, CancellationToken cancellationToken)
        {
            var check = await _diagnoseRepository.Exists(b => b.Name.ToLower() == request.Name.ToLower() || b.Code1.ToLower()==request.Code1.ToLower());
            if (check)
            {
                throw new AlreadyExistException(request.Name, nameof(request.Name));
            }
            var diagnose = Diagnose.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.Code1);
            diagnose.Code2 = request.Code2;
            diagnose.Code3 = request.Code3;
            diagnose.Description = request.Description;

            await _diagnoseRepository.AddAsync(diagnose);

            return OperationResult<string>.Success(diagnose.Id);
        }
    }

    public class CreateDiagnoseCommandValidator : AbstractValidator<CreateDiagnoseCommand>
    {

        public CreateDiagnoseCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Code1)
                .NotEmpty()
                .NotNull();
        }
    }
}
