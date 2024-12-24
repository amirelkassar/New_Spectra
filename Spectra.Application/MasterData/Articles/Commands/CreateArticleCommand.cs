using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Articles.Dtos;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.MasterData.Articles;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Articles.Commands
{
    public class CreateArticleCommand : IRequest<OperationResult>
    {
        public CreateArticleCommand()
        {
            Comments = [];
            Sections = [];
        }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public IFormFile HeroImage { get; set; }
        public int? Rate { get; set; }
        public ICollection<ArticleSectionCreateDto> Sections { get; set; }
        public ICollection<ArticleCommentCreateDto>? Comments { get; set; }

        public class CreateArticleCommandHandler(IBaseMongoDbRepository<Article> articleRepository,
            IDocumentHellper documentHellper) : IRequestHandler<CreateArticleCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Article> _articleRepository = articleRepository;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(CreateArticleCommand request, CancellationToken cancellationToken)
            {
                var article = new Article(Ulid.NewUlid().ToString())
                {
                    ArTitle = request.ArTitle,
                    ArDescription = request.ArDescription,
                    EnTitle = request.EnTitle,
                    EnDescription = request.EnDescription,
                    Rate = request.Rate,
                    HeroImage = await _documentHellper.CreateAttachment(request.HeroImage, Pathes.GetArticlesPath()),
                    Comments = request.Comments.Adapt<ICollection<ArticleComment>>(),
                };

                foreach (var section in request.Sections)
                {
                    var articleSection = section.Adapt<ArticleSection>();
                    articleSection.SectionImage = await _documentHellper.CreateAttachment(section.SectionImage, Pathes.GetArticlesPath());
                    article.Sections.Add(articleSection);
                }

                await _articleRepository.AddAsync(article);

                return OperationResult<string>.Success(article.Id);
            }
        }

        public class CreateArticleCommandValidator : AbstractValidator<CreateArticleCommand>
        {
            public CreateArticleCommandValidator()
            {
                RuleFor(a => a.ArTitle)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(3);

                RuleFor(a => a.ArDescription)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(3);


                RuleFor(a => a.EnTitle)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(3);

                RuleFor(a => a.EnDescription)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(3);


                RuleFor(a => a.EnDescription)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(3);


                RuleFor(a => a.HeroImage)
                    .NotEmpty()
                    .NotNull()
                    .Must(i => i.Length > 0);

                RuleFor(a => a.Sections)
                    .NotEmpty()
                    .NotNull()
                    .Must(s => s.Count > 0);
            }
        }
    }
}
