using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Templates.Models
{
    public class PasswordResetEmailTemplateModel
    {
        public string Token { get; set; }
        public string Email { get; set; }
        public string UserFullName { get; set; }
        public string ResetPasswordUrl { get; set; }
        public CompanyInfoModel CompanyInfo { get; set; }
    }
}
