using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.AdvertisingBanners.Commands
{
    public class UpdateAdvertisingBannerCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public IFormFile MainPhoto { get; set; }
        public List<string> SectionDescription { get; set; }
        public List<IFormFile> AttachmentPath { get; set; }



        public class UpdateArticlesCommandHandler : IRequestHandler<UpdateAdvertisingBannerCommand, OperationResult<Unit>>
        {

            private readonly IArticlesRepository _articlesRepository;
            private readonly IHellper _addPhoto;



            public UpdateArticlesCommandHandler(IArticlesRepository serviceMRepository, IHellper addPhoto)
            {
                _articlesRepository = serviceMRepository;
                _addPhoto = addPhoto;
            }


            public async Task<OperationResult<Unit>> Handle(UpdateAdvertisingBannerCommand request, CancellationToken cancellationToken)
            {
                var entity = await _articlesRepository.GetByIdAsync(request.Id);

                var names = await _articlesRepository.GetAllAsync(b => b.Title == request.Title && b.Id != request.Id);
                if (names.Any())
                {
                    throw new DbErrorException(" this's Name is a ready exists");
                }



                entity.Title = request.Title;
                var allPathes = entity.Secations.Select(x => x.AttachmentPath).ToList();

                if (request.MainPhoto != null)
                {

                    entity.MainPhoto = await _addPhoto.UpdateAttachment(entity.MainPhoto, request.MainPhoto, Pathes.MainPhotoArticles);


                }
                //if (request.AttachmentPath != null)
                //{
                //    entity.MainPhoto = await _addPhoto.UpdateAttachments(allPathes, request.AttachmentPath, Pathes.InteriorPhotsArticles);
                //}

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
                        photoPaths = await _addPhoto.UpdateAttachment(allPathes[i], photos[i], Pathes.InteriorPhotsArticles);
                    }


                    var section = new SectionSetings
                    {
                        AttachmentPath = photoPaths,
                        SectionDescription = description
                    };

                    allSections.Add(section);
                }
                entity.Secations = allSections;
                await _articlesRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
