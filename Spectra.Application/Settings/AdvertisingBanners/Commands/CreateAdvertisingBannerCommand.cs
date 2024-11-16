//using MediatR;
//using Microsoft.AspNetCore.Http;
//using Spectra.Application.MasterData.HellperFunc;
//using Spectra.Application.Messaging;
//using Spectra.Application.Settings.Articles;
//using Spectra.Domain.Settings.AdvertisingBanner;
//using Spectra.Domain.Shared.Constants;
//using Spectra.Domain.Shared.Wrappers;


//namespace Spectra.Application.Settings.AdvertisingBanners.Commands
//{
//    public class CreateAdvertisingBannerCommand : ICommand<OperationResult<string>>
//    {
//        public string Title { get; set; }
//        public IFormFile MainPhoto { get; set; }



//    }

//    public class CreateAdvertisingBannerCommandHandler : IRequestHandler<CreateAdvertisingBannerCommand, OperationResult<string>>
//    {
//        private readonly IArticlesRepository _articlesRepository;
//        private readonly IHellper _addPhoto;



//        public CreateAdvertisingBannerCommandHandler(IArticlesRepository serviceMRepository, IHellper addPhoto)
//        {
//            _articlesRepository = serviceMRepository;
//            _addPhoto = addPhoto;
//        }

//        public async Task<OperationResult<string>> Handle(CreateAdvertisingBannerCommand request, CancellationToken cancellationToken)
//        {

//            string photoPath = null;

//            var uploadPhoto = await _addPhoto.CreateAttachment(request.MainPhoto, Pathes.MainPhotoArticles);
//            if (uploadPhoto != null)
//            {
//                photoPath = uploadPhoto;

//            }


//            var entity = AdvertisingBanner.Create(

//                Ulid.NewUlid().ToString(),
//               request.Title,
//                 photoPath


//                );
//            await _articlesRepository.AddAsync(entity);

//            return OperationResult<string>.Success(entity.Id);



//        }
//    }

//}