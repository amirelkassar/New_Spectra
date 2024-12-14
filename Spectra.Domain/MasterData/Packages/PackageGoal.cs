using System;

namespace Spectra.Domain.MasterData.Packages
{
    public class PackageGoal
    {
        public PackageGoal()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
    }
}
