using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.MasterData.GeneralComplaints;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateGeneralComplaintsCommandFormExcelCommand
    {
      

        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateGeneralComplaintsCommand>, Unit>
        {
            private readonly IGeneralComplaintRepository _generalComplaintRepository;

            public CreateBulkDataCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
            {

                _generalComplaintRepository = generalComplaintRepository;
            }

            public async Task<Unit> Handle(CreateBulkDataCommand<CreateGeneralComplaintsCommand> request, CancellationToken cancellationToken)
            {
                foreach (var item in request.Data)
                {
                    var entity = GeneralComplaints.Create(
                Ulid.NewUlid().ToString(), item.Code1 ,item.ComplaintName, item.DescriptionOfTheComplaint
              );



                    await _generalComplaintRepository.AddAsync(entity);
                }
                return Unit.Value;
            }
        }

    }
}