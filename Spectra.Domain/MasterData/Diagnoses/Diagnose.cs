
using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.Diagnoses
{
    public class Diagnose : BaseAuditableEntity<string>
    {
        public string Code1 { get; set; }
        public string? Code2 { get; set; }
        public string? Code3 { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        protected Diagnose() { }
        private Diagnose(string id,
           string name,
           string code) : base(id)
        {
            Name = name;
            Code1 = code;
        }
        public static Diagnose Create(string id, string code1, string name)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(code1, nameof(code1));
            ArgumentNullException.ThrowIfNull(name, nameof(name));

            return new Diagnose(id, code1, name);
        }
    }
}
