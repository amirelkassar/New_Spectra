﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.Cities
{
    public class City
    {
        public string Id { get; set; }
        public string StateId { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
    }
}