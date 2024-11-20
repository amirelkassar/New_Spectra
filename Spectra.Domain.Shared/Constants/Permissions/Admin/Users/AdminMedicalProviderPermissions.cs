using Spectra.Domain.Shared.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Constants.Permissions.Admin.Users
{
    public class AdminMedicalProviderPermissions : IPermissionContributor
    {
        public const string Group = nameof(AdminMedicalProviderPermissions);
        //Crud operations permissoins
        public const string CRUDPermissions = Group + nameof(CRUDPermissions);
        public const string Create = CRUDPermissions + nameof(Create);
        public const string Update = CRUDPermissions + nameof(Update);
        public const string ReadList = CRUDPermissions + nameof(ReadList);
        public const string ReadOne = CRUDPermissions + nameof(ReadOne);
        public const string Delete = CRUDPermissions + nameof(Delete);

    }




}
