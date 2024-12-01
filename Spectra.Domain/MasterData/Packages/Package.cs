using Spectra.Domain.Shared.Common;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Packages
{
    public class Package : BaseAuditableEntity<string>
    {
        public string ArName { get; set; }
        public string EnName { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public int? IconCode { get; set; }
        public ICollection<PackageService> Services { get; set; }
        public ICollection<PackageGoal> Goals { get; set; }
        public string? PhotoPath { get; set; }
        protected Package() { }
        private Package(string id,
        string arName,
        string enName,
        double price,
        ICollection<PackageService> services) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(price, nameof(price));
            ArgumentNullException.ThrowIfNull(services, nameof(services));
            ArName = arName;
            EnName = enName;
            Price = price;
            Services = services;
            Goals = [];
        }
        public static Package Create(string id,
        string arName,
        string enName,
        double price,
        ICollection<PackageService> services) => new(id, arName, enName, price, services);
    }
}
