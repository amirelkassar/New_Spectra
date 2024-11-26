using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.ServicesMD
{
    public class PlatformService : BaseAuditableEntity<string>
    {
        public ServiceTypes ServiceType { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public string? TermsAndConditions { get; set; }
        public ICollection<ServiceSection>? Secations { get; set; }
        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<ServiceSpecification>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public string? HeroImagePath { get; set; }
        protected PlatformService() { }
        private PlatformService(string id,
        string enName,
        string arName,
        ServiceTypes serviceType,
        double price) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            ArgumentNullException.ThrowIfNull(serviceType, nameof(serviceType));
            ArgumentNullException.ThrowIfNull(price, nameof(price));
            EnName = enName;
            ArName = arName;
            ServiceType = serviceType;
            Price = price;
            Secations = [];
            Reports = [];
            Specifications = [];
            Contents = [];
        }
        public static PlatformService Create(string id,
        string enName,
        string arName,
        ServiceTypes serviceType,
        double price)=>new(id, enName, arName, serviceType, price);
    }
}
