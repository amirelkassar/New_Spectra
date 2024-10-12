using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Constants
{
    public class CustomClaims
    {
        public const string Surname = nameof(Surname);
        public const string ClientId = nameof(ClientId);
        public const string Aud = "aud";
        public const string Iss = "iss";
    }
}
