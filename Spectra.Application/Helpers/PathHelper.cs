using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Helpers
{
    public class PathHelper
    {
        public static string GetRootPath=> Path.Combine(Environment.CurrentDirectory, "ServerDocuments");
        public static string GetEmailTemplatesPath => Path.Combine(GetRootPath, "EmailTemplates");
    }
}
