using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Spectra.Domain.MasterData.ServicesMD
{
    public class MasterDataServices : BaseAuditableEntity<string>
    {
        public AvailableSrvice AvailableSrvices { get;private set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public string? TermsAndConditions { get; set; }
        public List<Secation>? Secations { get; private set; }
        public List<string>? AttachmentPath { get; private set; }

        protected MasterDataServices() { }
        private MasterDataServices(
        string id,
        string name,
        AvailableSrvice availableServices,
        double servicePrice) : base(id)
        {
            Id = id;
            Name = name;
            AvailableSrvices = availableServices;
            Price = servicePrice;
        }
        public static MasterDataServices Create(string id,
        string name,
        AvailableSrvice availableServices,
        double servicePrice)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(availableServices, nameof(availableServices));
            ArgumentNullException.ThrowIfNull(servicePrice, nameof(servicePrice));

            return new MasterDataServices(id,
                name,
                availableServices, 
                servicePrice);
        }


    }
}
