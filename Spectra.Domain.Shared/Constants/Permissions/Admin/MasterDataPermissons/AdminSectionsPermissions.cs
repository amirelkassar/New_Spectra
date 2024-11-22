using Spectra.Domain.Shared.Helpers;

namespace Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons
{
    public class AdminSectionsPermissions : IPermissionContributor
    {
        public const string Group = nameof(AdminSectionsPermissions) + "Group.";
        //Crud operations permissoins
        public const string CRUDPermissions = Group + nameof(CRUDPermissions) + "Category.";
        public const string Create = CRUDPermissions + nameof(Create);
        public const string BulkCreate = CRUDPermissions + nameof(BulkCreate);
        public const string Update = CRUDPermissions + nameof(Update);
        public const string BulkUpdate = CRUDPermissions + nameof(BulkUpdate);
        public const string Delete = CRUDPermissions + nameof(Delete);
        public const string ReadList = CRUDPermissions + nameof(ReadList);
        public const string ReadOne = CRUDPermissions + nameof(ReadOne);
        //sheets operations permissoins
        public const string SheetsPermissions = Group + nameof(SheetsPermissions) + "Category.";
        public const string Print = SheetsPermissions + nameof(Print);
        public const string Download = SheetsPermissions + nameof(Download);
        public const string Export = SheetsPermissions + nameof(Export);
        public const string Import = SheetsPermissions + nameof(Import);

    }
}
