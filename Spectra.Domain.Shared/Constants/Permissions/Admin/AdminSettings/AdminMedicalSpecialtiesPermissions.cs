namespace Spectra.Domain.Shared.Constants.Permissions.Admin.AdminSettings
{
    public class AdminMedicalSpecialtiesPermissions
    {

        public const string Group = nameof(AdminMedicalSpecialtiesPermissions) + "Group.";
        //Crud operations permissoins
        public const string CRUDPermissions = Group + nameof(CRUDPermissions) + "Category";
        public const string Create = CRUDPermissions + nameof(Create);
        public const string Update = CRUDPermissions + nameof(Update);
        public const string Delete = CRUDPermissions + nameof(Delete);
        public const string ReadList = CRUDPermissions + nameof(ReadList);
        public const string ReadOne = CRUDPermissions + nameof(ReadOne);

    }
}
