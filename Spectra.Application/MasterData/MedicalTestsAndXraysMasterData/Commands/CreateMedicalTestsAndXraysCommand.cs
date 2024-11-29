using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands
{
    public class CreateMedicalTestsAndXraysCommand : ICommand<OperationResult>
    {
        public string Name { get; set; }
        public string? Code { get; set; }
        public ExaminationType ExaminationTypes { get; set; }
    }

    public class CreateMedicalTestsAndXraysCommandHandler(IBaseMongoDbRepository<MedicalTestAndXray> medicalTestsAndXrayRepository) : IRequestHandler<CreateMedicalTestsAndXraysCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<MedicalTestAndXray> _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        public async Task<OperationResult> Handle(CreateMedicalTestsAndXraysCommand request, CancellationToken cancellationToken)
        {
            var names = await _medicalTestsAndXrayRepository.GetAllAsync(b => b.Name.ToLower() == request.Name.ToLower());
            if (names.data.Any())
            {
                throw new AlreadyExistException(request.Name, nameof(request.Name));
            }
            var MedicalTestsAndXray = Domain.MasterData.MedicalTestsAndXrays.MedicalTestAndXray.Create(Ulid.NewUlid().ToString(),
                           request.Name,
                           request.ExaminationTypes);
            MedicalTestsAndXray.Code = request.Code;

            await _medicalTestsAndXrayRepository.AddAsync(MedicalTestsAndXray);
            return OperationResult<string>.Success(MedicalTestsAndXray.Id);
        }
    }
    public class CreateMedicalTestsAndXraysCommandValidator : AbstractValidator<CreateMedicalTestsAndXraysCommand>
    {
        public CreateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Code)
               .NotEmpty()
               .NotNull();

            RuleFor(x => x.ExaminationTypes)
               .NotEmpty()
               .NotNull();
        }
    }
}