using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class CreateGeneralComplaintsCommand : ICommand<OperationResult<string>>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }
        public string DescriptionOfTheComplaint { get; set; }
    }

    public class CreateGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository) : IRequestHandler<CreateGeneralComplaintsCommand, OperationResult<string>>
    {
        private readonly IGeneralComplaintRepository _generalComplaintRepository = generalComplaintRepository;

        public async Task<OperationResult<string>> Handle(CreateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
            var names = await _generalComplaintRepository.GetAllAsync(b => b.ComplaintName == request.ComplaintName);
            if (names.Any())
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