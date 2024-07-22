﻿using Spectra.Application.Countries.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.SeedService
{
    public class StateApiResponse
    {
        public bool Error { get; set; }
        public string Msg { get; set; }
        public List<CountryStatesData> Data { get; set; }
    }
}