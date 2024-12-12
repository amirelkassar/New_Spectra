using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.ServicesMD
{
    public class PlatformService : BaseAuditableEntity<string>
    {
        public ServiceTypes ServiceType { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? ArDescription { get; set; }
        public string? EnDescription { get; set; }
        public double? Price { get; set; }
        public double? Discount { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }

        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<ServiceSpecification>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public string? HeroImagePath { get; set; }
        protected PlatformService() { }
        private PlatformService(string id,
        string enName,
        string arName,
        ServiceTypes serviceType) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            ArgumentNullException.ThrowIfNull(serviceType, nameof(serviceType));
            EnName = enName;
            ArName = arName;
            ServiceType = serviceType;
            Reports = [];
            Specifications = [];
            Contents = [];
        }
        public static PlatformService Create(string id,
        string enName,
        string arName,
        ServiceTypes serviceType) => new(id, enName, arName, serviceType);
    }
}
