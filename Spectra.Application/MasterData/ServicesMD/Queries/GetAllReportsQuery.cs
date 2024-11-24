using MediatR;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllReportsQuery : IRequest<OperationResult<IEnumerable<PlatformService>>>
    {

    }
}
