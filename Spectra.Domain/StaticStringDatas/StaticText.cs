using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using System.Collections.Generic;
using System;

namespace Spectra.Domain.StaticStringDatas
{
    public class StaticText /*: BaseAuditableEntity<string>*/
    {
        public int Id { get; set; }
        public string Titel { get; set; }
        public string Data { get; set; }
        public TypeDatas TypeData { get; set; }
       // protected StaticText() { }
       // private StaticText(

       //   string id,
       //   string titel,
       //   string data,
       //TypeDatas typeData
       //     ) : base(id)
       // {

       //     Id = id;
       //     Titel = titel;
       //     Data = data;
       //     TypeData = typeData;
       // }
       // public static StaticText Create(string id, string titel, string data, TypeDatas typeData
       //)
       // {

       //     ArgumentNullException.ThrowIfNull(id, nameof(id));
       //     ArgumentNullException.ThrowIfNull(titel, nameof(titel));
       //     ArgumentNullException.ThrowIfNull(data, nameof(data));
       //     ArgumentNullException.ThrowIfNull(typeData, nameof(typeData));

       //     return new StaticText(id, titel, data, typeData);

       // }
    }


}
