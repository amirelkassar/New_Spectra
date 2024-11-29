using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.ServicesMD.Dtos
{
    public class ServiceListReadDto
    {
        public string Id { get; set; }
        public ServiceTypes ServiceType { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }
    }
}
