using Spectra.Domain.MasterData.ServicesMD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.DTO
{
    public class GetServicesAndDurationOFContractDto
    {
     public List<ServiesFromMasterDataDto> Servises { get; set; }

        public double DurationFreelance { get; set; }
        public double DurationTeamSpectra { get; set; }
    }
}
