using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.AppUsers.Dtos
{
    public class OrganizationData
    {
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Industry { get; set; }
        public OrganizationTypes? OrganizationType { get; set; }
        public string? OrganizationEmail { get; set; }
    }
}
