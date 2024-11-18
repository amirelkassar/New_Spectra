using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.Settings.Articles.Commands;
using Spectra.Application.Settings.Articles.Dto;
using Spectra.Application.Settings.Articles.Queries;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.Articles
{
    public class ArticlesService : IArticlesService
    {
        private readonly IMediator _mediator;



        public ArticlesService(IMediator mediator)
        {

            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateArticles(CreateArticlesCommand input)
        {


            var command = new CreateArticlesCommand
            {
                MainPhoto = input.MainPhoto,
                Title = input.Title,
                AttachmentPath = input.AttachmentPath,
                SectionDescription = input.SectionDescription
            };


            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdateArticles(string id, UpdateArticlesCommand input)
        {


            var command = new UpdateArticlesCommand
            {
                MainPhoto = input.MainPhoto,
                Title = input.Title,
                AttachmentPath = input.AttachmentPath,
                SectionDescription = input.SectionDescription
            };




            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteArticles(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Article>> GetArticlesMById(string id)
        {
            var query = new GetArticlesByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<Article>>> GetAllArticles()
        {
            var query = new GetAllArticlesQuery();
            return await _mediator.Send(query);
        }
        //public async Task<OperationResult<IEnumerable<ServicesDto>>> GetAllNameAndArticles()
        //{
        //    var query = new GetAllNameAndTermServicesQuery();
        //    return await _mediator.Send(query);
        //}


    }
}

