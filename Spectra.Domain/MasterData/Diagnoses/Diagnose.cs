
using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.Diagnoses
{
    public class Diagnose : BaseAuditableEntity<string>
    {
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string Name { get; set; }
<<<<<<< HEAD

=======
>>>>>>> Admin-BackEnd
        public string Description { get; set; }



        protected Diagnose() { }
        private Diagnose(
               string id,
               string code1,
               string code2,
               string code3,
           string name,
           string description
               ) : base(id)
        {
            Id = id;
            Code1 = code1;
            Code2 = code2;
            Code3 = code3;
            Name = name;
            Description = description;
        }
        public static Diagnose Create(string id, string code1,
               string code2,
               string code3,
               string name,
               string description
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));

            ArgumentNullException.ThrowIfNull(name, nameof(name));

            ArgumentNullException.ThrowIfNull(description, nameof(description));
            ArgumentNullException.ThrowIfNull(code1, nameof(code1));
            ArgumentNullException.ThrowIfNull(code2, nameof(code2));
            ArgumentNullException.ThrowIfNull(code3, nameof(code3));

            return new Diagnose(id, code1, code2, code3, name, description);

        }
    }
}
