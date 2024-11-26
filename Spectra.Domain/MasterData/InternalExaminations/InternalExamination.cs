using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.InternalExaminations
{
    public class InternalExamination : BaseAuditableEntity<string>
    {
        public string Name { get; set; }

        public string Code { get; set; }

        protected InternalExamination() { }
        private InternalExamination(
               string id,
           string name,
           string code
               ) : base(id)
        {
            Id = id;
            Name = name;
            Code = code;
        }
        public static InternalExamination Create(string id, string name,
           string code
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(code, nameof(code));

            return new InternalExamination(id, name, code);

        }
    }
}
