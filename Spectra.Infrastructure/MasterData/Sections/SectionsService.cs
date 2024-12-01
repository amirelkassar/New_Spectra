using MediatR;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Queries;
using Spectra.Application.MasterData.Sections.Service;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.Sections
{
    public class SectionsService(IMediator mediator) : ISectionsService
    {
        private readonly IMediator _mediator = mediator;

        public async Task<OperationResult> CreateSection(CreateSectionsCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> UpdateSection(UpdateSectionsCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteSection(DeleteSectionsCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> GetSectionById(string id)
        {
            var query = new GetSectionByIdQuery { Id = id };

            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllSection(GetAllSectionsQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

