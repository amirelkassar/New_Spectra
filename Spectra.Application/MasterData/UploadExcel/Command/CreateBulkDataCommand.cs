using MediatR;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateBulkDataCommand<T> : ICommand<OperationResult<Unit>>
    {
        public IEnumerable<T> Data { get; set; }
    }
}
