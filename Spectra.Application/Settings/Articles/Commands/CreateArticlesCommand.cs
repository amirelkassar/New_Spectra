using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.Articles.Commands
{
    public class CreateArticlesCommand : ICommand<OperationResult<string>>
    {
        public string Title { get; set; }
        public IFormFile MainPhoto { get; set; }
        public List<string> SectionDescription { get; set; }
        public List<IFormFile> AttachmentPath { get; set; }


    }

    public class CreateArticlesCommandHandler : IRequestHandler<CreateArticlesCommand, OperationResult<string>>
    {
        private readonly IArticlesRepository _articlesRepository;
        private readonly IDocumentHellper _addPhoto;



        public CreateArticlesCommandHandler(IArticlesRepository serviceMRepository, IDocumentHellper addPhoto)
        {
            _articlesRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<string>> Handle(CreateArticlesCommand request, CancellationToken cancellationToken)
        {

            string photoPath = null;

            var uploadPhoto = await _addPhoto.CreateAttachment(request.MainPhoto, Pathes.GetArticlesPath());
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;

            }

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
                    photoPaths = await _addPhoto.CreateAttachment(photos[i], Pathes.GetArticlesPath());
                }


                var section = new SectionSetings
                {
                    AttachmentPath = photoPath,
                    SectionDescription = description
                };

                allSections.Add(section);
            }

            var entity = Article.Create(

                Ulid.NewUlid().ToString(),
               request.Title,
                 photoPath,
               allSections

                );
            await _articlesRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }

}