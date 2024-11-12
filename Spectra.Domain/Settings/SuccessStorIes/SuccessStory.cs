using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Spectra.Domain.Settings.SuccessStorIes
{
    public class SuccessStory : BaseAuditableEntity<string> {


        public string ChiledeName { get; set; }
        public string Diagnosis { get; set; }
        public string Descript { get; set; }
        public string? ChiledPhotoBefore { get; set; }
        public string? ChiledPhotoAfter { get; set; }
        public List<SectionSetings> SectionStory { get; set; }
        public string ContentComment { get; set; }
        public string? FamilyPhoto { get; set; }
        public string? FamilyVideo { get; set; }
  
        protected SuccessStory() { }

        private SuccessStory(
            string id,
    
            string chiledeName,
            string diagnosis,
            string descript,
            string? chiledPhotoBefore,
            string? chiledPhotoAfter,
            List<SectionSetings> sectionStory,
            string contentComment,
            string? familyPhoto,
            string? familyVideo
     
        ) : base(id)
        {
            Id = id;

            ChiledeName = chiledeName;
            Diagnosis = diagnosis;
            Descript = descript;
            ChiledPhotoBefore = chiledPhotoBefore;
            ChiledPhotoAfter = chiledPhotoAfter;
            SectionStory = sectionStory;
            ContentComment = contentComment;
            FamilyPhoto = familyPhoto;
            FamilyVideo = familyVideo;
         
        }

        public static SuccessStory Create(
            string id,
          
            string chiledeName,
            string diagnosis,
            string descript,
            string? chiledPhotoBefore,
            string? chiledPhotoAfter,
            List<SectionSetings> sectionStory,
            string contentComment,
            string? familyPhoto,
            string? familyVideo
    
        )
        {
            // Validate required parameters
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(chiledeName, nameof(chiledeName));
            ArgumentNullException.ThrowIfNull(diagnosis, nameof(diagnosis));
            ArgumentNullException.ThrowIfNull(descript, nameof(descript));
            ArgumentNullException.ThrowIfNull(chiledPhotoBefore, nameof(chiledPhotoBefore));
            ArgumentNullException.ThrowIfNull(chiledPhotoAfter, nameof(chiledPhotoAfter));
            ArgumentNullException.ThrowIfNull(sectionStory, nameof(sectionStory));
         


     
            var secationList = sectionStory.Select(x => new SectionSetings
            {
                SectionDescription = x.SectionDescription,
                AttachmentPath = x.AttachmentPath
            }).ToList() ?? new List<SectionSetings>();

            return new SuccessStory(
                id,
                chiledeName,
                diagnosis,
                descript,
                chiledPhotoBefore,
                chiledPhotoAfter,
                sectionStory,
                contentComment,
                familyPhoto,
                familyVideo
           
            );
        }
    }
}
