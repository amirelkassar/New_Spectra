using MediatR;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllReportsQuery : IRequest<OperationResult<IEnumerable<MasterDataServices>>>
    {

    }
}
