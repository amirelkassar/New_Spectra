using Spectra.Domain.Shared.Helpers;

namespace Spectra.Application.Identities.Permissions.Users
{
    [PermissionGroupName("Contract", "العقود")]
    public class ContractPermissions : IPermissionContributor
    {
        public const string Group = nameof(ContractPermissions) + "Group.";
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

        [PermissoinCategoryName("Contracting", "التعاقد", Contracting)]
        public const string Contracting = Group + nameof(Contracting) + "Category";
        [PermissoinName("Apply Contract", "تقديم", Apply)]
        public const string Apply = Contracting + nameof(Apply);
        [PermissoinName("Cancel", "الغاء", Cancel)]
        public const string Cancel = Contracting + nameof(Cancel);
        [PermissoinName("Reject", "رفض", Reject)]
        public const string Reject = Contracting + nameof(Reject);
        [PermissoinName("Accept", "موافقة", Accept)]
        public const string Accept = Contracting + nameof(Accept);
    }




}
