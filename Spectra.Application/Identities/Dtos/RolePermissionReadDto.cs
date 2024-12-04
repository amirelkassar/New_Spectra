namespace Spectra.Application.Identities.Dtos
{
    public class RolePermissionReadDto
    {
        public RolePermissionReadDto()
        {
            Groups = [];
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<PermissionGroupReadDto> Groups { get; set; }
    }

    public class PermissionGroupReadDto
    {
        public PermissionGroupReadDto()
        {
            Categories = [];
        }
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public ICollection<PermissionCategoryReadDto> Categories { get; set; }
    }

    public class PermissionCategoryReadDto
    {
        public PermissionCategoryReadDto()
        {
            Permissions = [];
        }
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public ICollection<PermissionReadDto> Permissions { get; set; }
    }

    public class PermissionReadDto
    {
        public PermissionReadDto()
        {
            Grant = true;
        }
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public bool Grant { get; set; }

    }
}
