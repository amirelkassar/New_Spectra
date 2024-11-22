using Spectra.Domain.Shared.Helpers;

namespace Spectra.Domain.Shared.Constants.Permissions.MedicalProvider
{
    public class MedicalProviderSpecialistPermissions : IPermissionContributor
    {
        public const string Group = nameof(MedicalProviderSpecialistPermissions) + "Group.";
        //Crud operations permissoins
        public const string CRUDPermissions = Group + nameof(CRUDPermissions) + "Category.";
        public const string Create = CRUDPermissions + nameof(Create);
        public const string Update = CRUDPermissions + nameof(Update);
        public const string ReadList = CRUDPermissions + nameof(ReadList);
        public const string ReadOne = CRUDPermissions + nameof(ReadOne);
    }




}
