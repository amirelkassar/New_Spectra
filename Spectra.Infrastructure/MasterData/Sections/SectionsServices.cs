using MediatR;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Application.MasterData.Sections.Queries;
using Spectra.Application.MasterData.Sections.Service;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.Sections
{
    public class SectionsServices : ISectionsServices
    {
        private readonly IMediator _mediator;


        public SectionsServices(IMediator mediator)
        {

            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateSection(CreateSectionsCommand input)
        {

            var command = new CreateSectionsCommand
            {
                Name = input.Name,
                DoctorName = input.DoctorName,
                SpecializationIds = input.SpecializationIds,
                DoctorId = input.DoctorId
            };

            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdateSection(string id, UpdateSectionsCommand input)
        {

            var command = new UpdateSectionsCommand
            {

                Id = id,
                Name = input.Name,
                DoctorName = input.DoctorName,
                SpecializationIds = input.SpecializationIds,
                DoctorId = input.DoctorId

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteSection(string id)
        {
            var command = new DeleteSectionsCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Section>> GetSectionById(string id)
        {
            var query = new GetSectionByIdQuery { Id = id };

            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<SectionDto>>> GetAllSection()
        {

            var query = new GetAllSectionsQuery();

            return await _mediator.Send(query);

        }

        public async Task<OperationResult<List<BaseMasterDataDto>>> GetAllSectionNames()
        {

            var query = new GetAllSectionsNameQuery();

            return await _mediator.Send(query);

        }

        public async Task<OperationResult<IEnumerable<GetAllDoctorsDto>>> GetAllDoctors()
        {

            var query = new GetAllDoctorsInSectionQuery();

            return await _mediator.Send(query);
        }
    }
}

