﻿using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.GeneralComplaints
{
    public class GeneralComplaint : BaseAuditableEntity<string>
    {
        public string ComplaintName { get; set; }
        public string Code1 { get; set; }

        public string DescriptionOfTheComplaint { get; set; }



        protected GeneralComplaint() { }
        private GeneralComplaint(
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
        public static GeneralComplaint Create(string id, string complaintName, string Code1,
           string descriptionOfTheComplaint
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(complaintName, nameof(complaintName));
            ArgumentNullException.ThrowIfNull(Code1, nameof(Code1));
            ArgumentNullException.ThrowIfNull(descriptionOfTheComplaint, nameof(descriptionOfTheComplaint));




            return new GeneralComplaint(id, Code1, complaintName, descriptionOfTheComplaint);

        }

    }
}
