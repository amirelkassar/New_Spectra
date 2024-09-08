﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Patients.DTO
{
    public class CreatePatientDto
    {
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
    }
}
