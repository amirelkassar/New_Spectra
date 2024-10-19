using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
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
    public class UpdateGeneralComplaintsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public string Code1  { get; set; }
        public string ComplaintName { get; set; }
        public string DescriptionOfTheComplaint { get; set; }


    }

    public class UpdateGeneralComplaintsCommandHandler : IRequestHandler<UpdateGeneralComplaintsCommand, OperationResult<Unit>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public UpdateGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }



        public async Task<OperationResult<Unit>> Handle(UpdateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {
        
<<<<<<< HEAD
            var generalComplaint = await _generalComplaintRepository.GetByIdAsync(request.Id);

                generalComplaint.Code1 = request.Code1;
=======

            var generalComplaint = await _generalComplaintRepository.GetByIdAsync(request.Id);
            var names = await _generalComplaintRepository.GetAllAsync(b => b.ComplaintName == request.ComplaintName);
            if (names != null)
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }


            generalComplaint.Code1 = request.Code1;
>>>>>>> Admin-BackEnd
            generalComplaint.ComplaintName = request.ComplaintName;
            generalComplaint.DescriptionOfTheComplaint = request.DescriptionOfTheComplaint;


            await _generalComplaintRepository.UpdateAsync(generalComplaint);
            return OperationResult<Unit>.Success(Unit.Value);
     
          
}

    }
    public class UpdateGeneralComplaintsCommandValidator : AbstractValidator<UpdateGeneralComplaintsCommand>
    {
        public UpdateGeneralComplaintsCommandValidator()
        {

            RuleFor(x => x.ComplaintName)
                .NotEmpty().WithMessage("Complaint name is required.")
                .MaximumLength(100).WithMessage("Complaint name must be less than 100 characters.");
            RuleFor(x => x.Code1)
               .NotEmpty().WithMessage("Complaint name is required.")
               .MaximumLength(20).WithMessage("Complaint name must be less than 20 characters.");

            RuleFor(x => x.DescriptionOfTheComplaint)
                .NotEmpty().WithMessage("Description of the complaint is required.")
                .MaximumLength(500).WithMessage("Description of the complaint must be less than 500 characters.");
        }
    }
}
