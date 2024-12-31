using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.PlatformServices.Dtos
{
    public class ServicePublicDto : BaseEntityDto<string>
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
