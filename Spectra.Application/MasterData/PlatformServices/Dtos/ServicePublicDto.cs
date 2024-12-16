using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.MasterData.ServicesMD;

namespace Spectra.Application.MasterData.PlatformServices.Dtos
{
    public class ServicePublicDto
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public string? HeroImagePath { get; set; }
    }
}
