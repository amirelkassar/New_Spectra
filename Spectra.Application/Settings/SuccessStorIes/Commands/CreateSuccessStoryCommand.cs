using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.SuccessStorIes.Commands
{
    public class CreateSuccessStoryCommand : ICommand<OperationResult<string>>
    {
        public string ChiledeName { get; set; }
        public string Diagnosis { get; set; }
        public string Descript { get; set; }
        public IFormFile? ChiledPhotoBefore { get; set; }
        public IFormFile? ChiledPhotoAfter { get; set; }
        public List<string> SectionDescription { get; set; }
        public List<IFormFile>? AttachmentPath { get; set; }
        public string ContentComment { get; set; }
        public IFormFile? FamilyPhoto { get; set; }
        public IFormFile? FamilyVideo { get; set; }
    }

    public class CreateSuccessStoryCommanddHandler : IRequestHandler<CreateSuccessStoryCommand, OperationResult<string>>
    {
        private readonly ISuccessStorIesRepository _successStorIesRepository;
        private readonly IDocumentHellper _addPhoto;

        public CreateSuccessStoryCommanddHandler(ISuccessStorIesRepository successStorIesRepository, IDocumentHellper addPhoto)
        {
            _successStorIesRepository = successStorIesRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<string>> Handle(CreateSuccessStoryCommand request, CancellationToken cancellationToken)
        {

            var allSections = new List<SectionSetings>();

            var descriptions = request.SectionDescription ?? new List<string>();
            var photos = request.AttachmentPath ?? new List<IFormFile>();

            // Use the longer count for iteration
            var maxCount = Math.Max(descriptions.Count, photos.Count);

            for (int i = 0; i < maxCount; i++)
            {
                var description = i < descriptions.Count ? descriptions[i] : null;

                string photoPaths = null;
                if (i < photos.Count)
                {
                    photoPaths = await _addPhoto.CreateAttachment(photos[i], Pathes.SmallIcons);
                }

                var section = new SectionSetings
                {
                    AttachmentPath = photoPaths,
                    SectionDescription = description
                };

                allSections.Add(section);
            }

            var entity = SuccessStory.Create(

                Ulid.NewUlid().ToString(),
               request.ChiledeName,
               request.Diagnosis,
               request.Descript,
               await CheckMthode(request.ChiledPhotoBefore, Pathes.ChiledPhotoBefore),
               await CheckMthode(request.ChiledPhotoAfter, Pathes.ChiledPhotoAfter),
               allSections,
               request.ContentComment,
               await CheckMthode(request.FamilyPhoto, Pathes.FamilyPhoto),
              null
                //CheckMthode(request.FamilyVideo Pathes.FamilyVideo)
                );

            await _successStorIesRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);

        }

        public async Task<string> CheckMthode(IFormFile data, string pathes)
        {
            string photoPath = null;

            var uploadPhoto = await _addPhoto.CreateAttachment(data, pathes);
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;

            }
            return photoPath;
        }
    }



}