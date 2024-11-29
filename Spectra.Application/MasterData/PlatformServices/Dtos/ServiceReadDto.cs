using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.ServicesMD.Dtos
{
    public class ServiceReadDto
    {
        public string Id { get; set; }
        public ServiceTypes ServiceType { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }
        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<ServiceSpecification>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public string? HeroImagePath { get; set; }
    }
}
