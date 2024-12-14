namespace Spectra.Application.Identities.Permissions.MasterDataPermissons
{
    [PermissionGroupName("Employee Group", "فرق الموظفين")]
    public class MedicalSpecialtiesPermissions
    {
        public const string Group = nameof(MedicalSpecialtiesPermissions) + "Group.";
        //Crud operations permissoins
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

    }
}
