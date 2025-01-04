using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateBulkDataCommand<T> : ICommand<OperationResult<Unit>>
    {
        public IEnumerable<T> Data { get; set; }
    }
}
