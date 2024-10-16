using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Payment
{
    public class HealthInsurance
    {
        public string CompanyName {  get; set; }

        public string InsurancePolicyNumber { get; set; }

        public string  TypeInsurance { get; set; }
        public string HolderName { get; set; }

        public DateTime DateOFBirth { get; set; }
        public string NationalId { get; set; }




    }
}
