using DocumentFormat.OpenXml.Office2016.Excel;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.SuccessStorIes.Commands
{
    public class UpdateSuccessStoryCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
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

        public class UpdateSuccessStoryCommandHandler : IRequestHandler<UpdateSuccessStoryCommand, OperationResult<Unit>>
        {

            private readonly ISuccessStorIesRepository _successStorIesRepository;
            private readonly IHellper _addPhoto;



            public UpdateSuccessStoryCommandHandler(ISuccessStorIesRepository successStorIesRepository, IHellper addPhoto)
            {
                _successStorIesRepository = successStorIesRepository;
                _addPhoto = addPhoto;
            }

            public async Task<OperationResult<Unit>> Handle(UpdateSuccessStoryCommand request, CancellationToken cancellationToken)
            {
                var entity = await _successStorIesRepository.GetByIdAsync(request.Id);

                var names = await _successStorIesRepository.GetAllAsync(b => b.ChiledeName == request.ChiledeName && b.Id != request.Id);
                if (names.Any())
                {
                    throw new DbErrorException(" this's Name is a ready exists");
                }

                entity.ChiledeName = request.ChiledeName;
                entity.Diagnosis = request.Diagnosis;
                entity.Descript = request.Descript;
                entity.ContentComment = request.ContentComment;

                var allPathes = entity.SectionStory.Select(x => x.AttachmentPath).ToList();

                    entity.ChiledPhotoBefore = await CheckMthode(entity.ChiledPhotoBefore, request.ChiledPhotoBefore, Pathes.ChiledPhotoBefore); 
                    entity.ChiledPhotoBefore = await CheckMthode(entity.ChiledPhotoBefore, request.ChiledPhotoBefore, Pathes.ChiledPhotoBefore); 
                    entity.FamilyPhoto = await CheckMthode(entity.FamilyPhoto, request.FamilyPhoto, Pathes.FamilyPhoto);
            
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
                        photoPaths = await _addPhoto.UpdateAttachment(allPathes[i], photos[i], Pathes.SmallIcons);
                    }

                    var section = new SectionSetings
                    {
                        AttachmentPath = photoPaths,
                        SectionDescription = description
                    };

                    allSections.Add(section);
                }
                entity.SectionStory = allSections;
                await _successStorIesRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);
            }
            public async Task<string> CheckMthode( string oldPath ,IFormFile data  ,string pathes)
            {
                if (data != null)
                {
                   var newPath = await _addPhoto.UpdateAttachment(oldPath, data, pathes);
                    return newPath;
                }
                return oldPath;
            }
        }
    }
}
