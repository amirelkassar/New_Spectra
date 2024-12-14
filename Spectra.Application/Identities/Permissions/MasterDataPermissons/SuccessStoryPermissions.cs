using Spectra.Domain.Shared.Helpers;

namespace Spectra.Application.Identities.Permissions.MasterDataPermissons
{
    [PermissionGroupName("Success Story", "قصص النجاح")]
    public class SuccessStoryPermissions : IPermissionContributor
    {
        public const string Group = nameof(SuccessStoryPermissions) + "Group.";
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
