using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MasterData.GeneralComplaints
{
    public class GeneralComplaints : BaseAuditableEntity<string>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }
        
        public string DescriptionOfTheComplaint { get; set; }



        protected GeneralComplaints() { }
        private GeneralComplaints(
               string id,
               string code1,
           string complaintName,
           string descriptionOfTheComplaint

               ) : base(id)
        {
            Id = id;
            Code1 = code1;
            ComplaintName = complaintName;
            DescriptionOfTheComplaint = descriptionOfTheComplaint;

        }
        public static GeneralComplaints Create(string id, string complaintName, string Code1,
           string descriptionOfTheComplaint
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(complaintName, nameof(complaintName));
            ArgumentNullException.ThrowIfNull(Code1, nameof(Code1));
            ArgumentNullException.ThrowIfNull(descriptionOfTheComplaint, nameof(descriptionOfTheComplaint));




            return new GeneralComplaints(id, Code1, complaintName, descriptionOfTheComplaint);

        }

    }
}
