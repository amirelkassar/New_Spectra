using System;
using System.Collections.Generic;

namespace Spectra.Domain.Contracts
{
    public class ContractTextSection
    {
        public ContractTextSection()
        {
            EnPoints = [];
            ARPoints = [];
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; private set; }
        public string ArTitle { get; set; }
        public string? EnTitle { get; set; }
        public string? ArDescription { get; set; }
        public string? ENDescription { get; set; }
        public ICollection<string>? EnPoints { get; set; }
        public ICollection<string>? ARPoints { get; set; }
    }
}
