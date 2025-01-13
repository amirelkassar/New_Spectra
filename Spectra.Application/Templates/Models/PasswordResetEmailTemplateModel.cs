using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Templates.Models
{
    public class PasswordResetEmailTemplateModel
    {
        public CompanyInfoModel CompanyInfo { get; set; }
        public string UserFullName { get; set; }
        public string LoginPage { get; set; }
    }
}
