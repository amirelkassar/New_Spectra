using Spectra.Application.Identities;
using Spectra.Domain.Shared.Helpers;

namespace Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons
{
    [PermissionGroupName("Drugs", "العقاقير")]
    public class AdminDrugPermissions : IPermissionContributor
    {
        public const string Group = nameof(AdminDrugPermissions) + "Group.";
        [PermissoinCategoryName("Management", "ادارة", CRUDPermissions)]
        public const string CRUDPermissions = Group + nameof(CRUDPermissions) + "Category";
        [PermissoinName("Create", "اضافة", Create)]
        public const string Create = CRUDPermissions + nameof(Create);
        [PermissoinName("Update", "تعديل", Update)]
        public const string Update = CRUDPermissions + nameof(Update);
        [PermissoinName("Delete", "حذف", Delete)]
        public const string Delete = CRUDPermissions + nameof(Delete);
        [PermissoinName("Read List", "عرض الكل", ReadList)]
        public const string ReadList = CRUDPermissions + nameof(ReadList);
        [PermissoinName("Read Details", "عرض التفاصيل", ReadOne)]
        public const string ReadOne = CRUDPermissions + nameof(ReadOne);
        [PermissoinName("Bulk Create", "اضافة مجموعة", BulkCreate)]
        public const string BulkCreate = CRUDPermissions + nameof(BulkCreate);
        [PermissoinName("Bulk Update", "تعديل مجموعة", BulkUpdate)]
        public const string BulkUpdate = CRUDPermissions + nameof(BulkUpdate);
        //sheets operations permissoins
        [PermissoinCategoryName("Data Sheets", "ملفات البيانات", SheetsPermissions)]
        public const string SheetsPermissions = Group + nameof(SheetsPermissions) + "Category.";
        [PermissoinName("Print", "طباعة", Print)]
        public const string Print = SheetsPermissions + nameof(Print);
        [PermissoinName("Download", "تحميل", Download)]
        public const string Download = SheetsPermissions + nameof(Download);
        [PermissoinName("Export", "تصدير", Export)]
        public const string Export = SheetsPermissions + nameof(Export);
        [PermissoinName("Import", "اداراج", Import)]
        public const string Import = SheetsPermissions + nameof(Import);
    }




}
