using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateGeneralComplaintsCommandFormExcelCommand
    {


        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateGeneralComplaintsCommand>, OperationResult<Unit>>
        {
            private readonly IGeneralComplaintRepository _generalComplaintRepository;

            public CreateBulkDataCommandHandler(IGeneralComplaintRepository generalComplaintRepository)
            {

                _generalComplaintRepository = generalComplaintRepository;
            }

            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateGeneralComplaintsCommand> request, CancellationToken cancellationToken)
            {

                foreach (var item in request.Data)
                {
                    var entity = GeneralComplaint.Create(
                Ulid.NewUlid().ToString(), item.Code1, item.ComplaintName, item.DescriptionOfTheComplaint
              );



                    await _generalComplaintRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);



            }
        }

    }
}