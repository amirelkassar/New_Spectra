namespace Spectra.Application.AppRoles.Permissions.Dtos
{
    public class PermissionGroupUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public ICollection<PermissionCategoryUpdateDto> Categories { get; set; }
    }

    public class PermissionCategoryUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public ICollection<PermissionUpdateDto> Permissions { get; set; }
    }

    public class PermissionUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public bool Grant { get; set; }
    }
}
