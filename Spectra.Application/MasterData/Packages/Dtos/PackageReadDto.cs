using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Packages.Dtos
{
    public class PackageReadDto:BaseEntityDto<string>
    {
        public string ArName { get; set; }
        public string EnName { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public int? IconCode { get; set; }
        public ICollection<PackageService> Services { get; set; }
        public ICollection<PackageGoal> Goals { get; set; }
        public string? PhotoPath { get; set; }
    }
}
