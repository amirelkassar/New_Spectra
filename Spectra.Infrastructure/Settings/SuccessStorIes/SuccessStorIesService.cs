using MediatR;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.Settings.SuccessStorIes.Commands;
using Spectra.Application.Settings.SuccessStorIes.Queries;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.SuccessStorIes
{
    public class SuccessStoryService : ISuccessStoryService
    {
        private readonly IMediator _mediator;

        public SuccessStoryService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<OperationResult<string>> CreateSuccessStoryies(CreateSuccessStoryCommand input)
        {


            var command = new CreateSuccessStoryCommand
            {

                ChiledeName = input.ChiledeName,
                Diagnosis = input.Diagnosis,
                Descript = input.Descript,
                ChiledPhotoBefore = input.ChiledPhotoBefore,
                ChiledPhotoAfter = input.ChiledPhotoAfter,
                SectionDescription = input.SectionDescription,
                AttachmentPath = input.AttachmentPath,
                ContentComment = input.ContentComment,
                FamilyPhoto = input.FamilyPhoto

            };

            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdateSuccessStoryies(string id, UpdateSuccessStoryCommand input)
        {

            var command = new UpdateSuccessStoryCommand
            {
                Id = id,
                ChiledeName = input.ChiledeName,
                Diagnosis = input.Diagnosis,
                Descript = input.Descript,
                ChiledPhotoBefore = input.ChiledPhotoBefore,
                ChiledPhotoAfter = input.ChiledPhotoAfter,
                SectionDescription = input.SectionDescription,
                AttachmentPath = input.AttachmentPath,
                ContentComment = input.ContentComment,
                FamilyPhoto = input.FamilyPhoto
            };




            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteSuccessStoryies(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<SuccessStory>> GetSuccessStoryiesMById(string id)
        {
            var query = new GetSuccessStoryByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<SuccessStory>>> GetAllSuccessStoryies()
        {
            var query = new GetAllSuccessStoryQuery();
            return await _mediator.Send(query);
        }



    }
}

