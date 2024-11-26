using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.GeneralComplaints
{
    public class GeneralComplaint : BaseAuditableEntity<string>
    {
        public string ComplaintName { get; set; }
        public string? Code1 { get; set; }
        public string? DescriptionOfTheComplaint { get; set; }



        protected GeneralComplaint() { }
        private GeneralComplaint(
               string id,
           string complaintName) : base(id)
        {
            Id = id;
            ComplaintName = complaintName;
        }
        public static GeneralComplaint Create(string id, string complaintName)
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(complaintName, nameof(complaintName));

            return new GeneralComplaint(id, complaintName);

        }

    }
}
