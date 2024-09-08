using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetAllDrugQuery : IRequest<IEnumerable<Drugs>>
    {

    }
    public class GetAllDrugeQueryHandler : IRequestHandler<GetAllDrugQuery, IEnumerable<Drugs>>
    {
        private readonly IDrugRepository _drugRepository;

        public GetAllDrugeQueryHandler(IDrugRepository drugRepository)
        {
            _drugRepository = drugRepository;
        }
        public async Task<IEnumerable<Drugs>> Handle(GetAllDrugQuery request, CancellationToken cancellationToken)
        {
            var drugs = await _drugRepository.GetAllAsync();
            return drugs;
        }
    }
}
