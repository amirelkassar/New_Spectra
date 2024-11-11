using MediatR;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.Settings.MedicalSpecialties.Commands;
using Spectra.Application.Settings.MedicalSpecialties.Queries;
using Spectra.Application.Settings.MedicalSpecialties.Services;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.MedicalSpecialties
{
    public class MedicalSpecialtiesService : IMedicalSpecialtiesService
    {
        private readonly IMediator _mediator;

        public MedicalSpecialtiesService(IMediator mediator)
        {

            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateMedicalSpecialties(CreateMedicalSpecialtCommand input)
        {


            var command = new CreateMedicalSpecialtCommand
            {
                DorctorsIds = input.DorctorsIds,
                SpecializationId = input.SpecializationId
            };

            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdateMedicalSpecialties(string id, UpdateMedicalSpecialtCommand input)
        {

            var command = new UpdateMedicalSpecialtCommand
            {
                Id = id,
                DorctorsIds = input.DorctorsIds,
                SpecializationId = input.SpecializationId
            };




            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteMedicalSpecialties(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<MedicalSpecialt>> GetMedicalSpecialtiesMById(string id)
        {
            var query = new GetMedicalSpecialtByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<MedicalSpecialt>>> GetAllMedicalSpecialties()
        {
            var query = new GetAllMedicalSpecialtQuery();
            return await _mediator.Send(query);
        }
        //public async Task<OperationResult<IEnumerable<ServicesDto>>> GetAllNameAndMedicalSpecialties()
        //{
        //    var query = new GetAllNameAndTermServicesQuery();
        //    return await _mediator.Send(query);
        //}


    }
}

