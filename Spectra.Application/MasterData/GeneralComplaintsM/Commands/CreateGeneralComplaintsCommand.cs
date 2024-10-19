using FluentValidation;
using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Commands;
<<<<<<< HEAD
=======
using Spectra.Application.MasterData.Drug;
>>>>>>> Admin-BackEnd
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.MasterData.GeneralComplaints;
<<<<<<< HEAD
=======
using Spectra.Domain.Shared.Common.Exceptions;
>>>>>>> Admin-BackEnd
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class CreateGeneralComplaintsCommand : ICommand<OperationResult<string>>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }

        public string DescriptionOfTheComplaint { get; set; }

       
    }



    public class CreateGeneralComplaintsCommandHandler : IRequestHandler<CreateGeneralComplaintsCommand, OperationResult<string>>
    {
        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public CreateGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
<<<<<<< HEAD
         
                var generalComplaint = GeneralComplaint.Create(
=======
            var names = await _generalComplaintRepository.GetAllAsync(b => b.ComplaintName == request.ComplaintName);
            if (names.Any())
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }

            var generalComplaint = GeneralComplaint.Create(
>>>>>>> Admin-BackEnd

                    Ulid.NewUlid().ToString(),

                    request.ComplaintName, request.Code1, request.DescriptionOfTheComplaint
                    );
                await _generalComplaintRepository.AddAsync(generalComplaint);
            return OperationResult<string>.Success( generalComplaint.Id);

           
        }
    }
    public class CreateGeneralComplaintsCommandValidator : AbstractValidator<CreateGeneralComplaintsCommand>
    {
        public CreateGeneralComplaintsCommandValidator()
        {
            RuleFor(x => x.ComplaintName)
                .NotEmpty().WithMessage("Complaint name is required.")
                .MaximumLength(100).WithMessage("Complaint name must be less than 100 characters.");
            RuleFor(x => x.Code1)
           .NotEmpty().WithMessage("Code name is required.")
           .MaximumLength(20).WithMessage("Complaint name must be less than 20 characters.");

            RuleFor(x => x.DescriptionOfTheComplaint)
                .NotEmpty().WithMessage("Description of the complaint is required.")
                .MaximumLength(500).WithMessage("Description of the complaint must be less than 500 characters.");
        }
    }
}