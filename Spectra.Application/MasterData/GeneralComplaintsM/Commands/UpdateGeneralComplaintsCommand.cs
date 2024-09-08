using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Commands
{
    public class UpdateGeneralComplaintsCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string ComplaintName { get; set; }
        public string DescriptionOfTheComplaint { get; set; }


    }

    public class UpdateGeneralComplaintsCommandHandler : IRequestHandler<UpdateGeneralComplaintsCommand, Unit>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public UpdateGeneralComplaintsCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }



        public async Task<Unit> Handle(UpdateGeneralComplaintsCommand request, CancellationToken cancellationToken)
        {

            var generalComplaint = await _generalComplaintRepository.GetByIdAsync(request.Id);
            if (generalComplaint == null)
            {
                throw new Exception(" General Complaint Not found");
            }

            generalComplaint.ComplaintName = request.ComplaintName;
            generalComplaint.DescriptionOfTheComplaint = request.DescriptionOfTheComplaint;


            await _generalComplaintRepository.UpdateAsync(generalComplaint);
            return Unit.Value;
        }

    }
}
