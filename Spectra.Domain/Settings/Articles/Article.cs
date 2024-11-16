using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Spectra.Domain.Settings.Articles
{
    public class Article : BaseAuditableEntity<string>
    {

        public string Title { get; set; }
        public string MainPhoto { get; set; }
        public List<SectionSetings> Secations { get; set; }


        protected Article() { }
        private Article(
        string id,
        string title,
        string mainPhoto,
        List<SectionSetings> secations
               ) : base(id)
        {
            Id = id;
            Title = title;
            Secations = secations;
            MainPhoto = mainPhoto;
        }
        public static Article Create(string id,
          string title,
        string mainPhoto,
        List<SectionSetings> secations

       )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(title, nameof(title));
            ArgumentNullException.ThrowIfNull(secations, nameof(secations));
            ArgumentNullException.ThrowIfNull(mainPhoto, nameof(mainPhoto));


            var secationList = secations?.Select(x => new SectionSetings
            {

                SectionDescription = x.SectionDescription,
                AttachmentPath = x.AttachmentPath

            }).ToList() ?? new List<SectionSetings>();



            return new Article(id,
                title,
                mainPhoto,
               secationList);

        }


    }
}
