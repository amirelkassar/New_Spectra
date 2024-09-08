using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetDrugsByIdQuery : IRequest<Drugs>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetDrugsByIdQuery, Drugs>
    {
        private readonly IDrugRepository _drugRepository;

        public GetDrugsByIdQueryHandler(IDrugRepository drugRepository)
        {
            _drugRepository = drugRepository;
        }

        public async Task<Drugs> Handle(GetDrugsByIdQuery request, CancellationToken cancellationToken)
        {
            return await _drugRepository.GetByIdAsync(request.Id);
        }
    }
}
