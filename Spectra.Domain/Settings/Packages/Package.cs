using Microsoft.AspNetCore.Http;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Settings.Packages
{
    public class Package : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public string Price { get; set; }
        //public List<SectionSetings> Secations { get; set; }
        public List<string> ContentPackage { get; set; }
        public List<string> PointOfPackage { get; set; }
        public string Photo { get; set; }
        protected Package() { }
        private Package(
        string id,
        string name,
        string price,
       List<string> contentPackage,
       List<string> pointOfPackage,
       string photo


               ) : base(id)
        {
            Id = id;
            Name = name;
            Price = price;
            ContentPackage = contentPackage;
            PointOfPackage = pointOfPackage;
            Photo = photo;
        }
        public static Package Create(string id,
        string name,
        string price,
        List<string> contentPackage,
        List<string> pointOfPackage,
        string photo

       )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(price, nameof(price));
            ArgumentNullException.ThrowIfNull(contentPackage, nameof(contentPackage));
            ArgumentNullException.ThrowIfNull(pointOfPackage, nameof(pointOfPackage));
            ArgumentNullException.ThrowIfNull(photo, nameof(photo));

            return new Package(id,name,price,contentPackage,pointOfPackage, photo);


        }
    }
}
