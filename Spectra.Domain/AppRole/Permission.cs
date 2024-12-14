using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppRole
{
    public class Permission : BaseEntity<string>
    {
        public Permission(string id)
        {
            Id = id;
        }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string LogicalName { get; set; }
        public string PermissoinCategoryId { get; set; }
    }
}
