using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class CreateGeneralComplaintsCommand : ICommand<OperationResult>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }
        public string DescriptionOfTheComplaint { get; set; }
    }

    public class CreateGeneralComplaintsCommandHandler(IBaseMongoDbRepository<GeneralComplaint> generalComplaintRepository) : IRequestHandler<CreateGeneralComplaintsCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<GeneralComplaint> _generalComplaintRepository = generalComplaintRepository;

        public async Task<OperationResult> Handle(CreateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
            var names = await _generalComplaintRepository.GetAllAsync(b => b.ComplaintName == request.ComplaintName);
            if (names.data.Any())
            {
                throw new AlreadyExistException(request.ComplaintName, nameof(request.ComplaintName));
            }

            var generalComplaint = GeneralComplaint.Create(Ulid.NewUlid().ToString(),
                    request.ComplaintName);
            generalComplaint.Code1 = request.Code1;
            generalComplaint.DescriptionOfTheComplaint = request.DescriptionOfTheComplaint;
            await _generalComplaintRepository.AddAsync(generalComplaint);
            return OperationResult<string>.Success(generalComplaint.Id);


        }
    }
    public class CreateGeneralComplaintsCommandValidator : AbstractValidator<CreateGeneralComplaintsCommand>
    {
        public CreateGeneralComplaintsCommandValidator()
        {
            RuleFor(x => x.ComplaintName)
                .NotEmpty()
                .NotNull();
        }
    }
}