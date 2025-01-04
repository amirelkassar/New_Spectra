using System;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Settings.AdvertisingBanner
{
    public class AdvertisingBanner : BaseAuditableEntity<string>
    {
        public string Title { get; set; }
        public string Photo { get; set; }
        protected AdvertisingBanner() { }
        private AdvertisingBanner(
        string id,
        string title,
        string photo

               ) : base(id)
        {
            Id = id;
            Title = title;

            Photo = photo;
        }
        public static AdvertisingBanner Create(string id,
          string title,
        string photo)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(title, nameof(title));

            ArgumentNullException.ThrowIfNull(photo, nameof(photo));

            return new AdvertisingBanner(id,
                title,
                photo
              );

        }
    }
}
