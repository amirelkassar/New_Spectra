using MediatR;
using Spectra.Application.Employees.MedicalTeams.Commands;
using Spectra.Application.Employees.MedicalTeams.Dto;
using Spectra.Application.Employees.MedicalTeams.Queries;
using Spectra.Application.Employees.MedicalTeams.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MedicalTeams
{
    public class MedicalTeamService : IMedicalTeamService
    {

        private readonly IMediator _mediator;

        public MedicalTeamService(IMediator mediator)
        {
            _mediator = mediator;

        }


        public async Task<OperationResult<string>> CreateMedicalTeam(CreateMedicalTeamCommand input)
        {

            var command = new CreateMedicalTeamCommand
            {
                DoctorId = input.DoctorId,
                DoctorName = input.DoctorName,
                SpecialistIds = input.SpecialistIds,

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> UpdateMedicalTeam(string id, UpdateMedicalTeamCommand input)
        {

            var command = new UpdateMedicalTeamCommand
            {
                Id = id,
                DoctorId = input.DoctorId,
                DoctorName = input.DoctorName,
                SpecialistIds = input.SpecialistIds,

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteMedicalTeam(string id)
        {
            var command = new DeleteMedicalTeamCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<SpecialistDto>>> GetMedicalTeamById(string id)
        {
            var query = new GetMedicalTeamByIdQuery { DoctorId = id };

            return await _mediator.Send(query);
        }

        //public async Task<OperationResult<IEnumerable<MedicalTeam>>> GetAllMedicalTeams()
        //{
        //    var query = new GetAllMedicalTeamsQuery();
        //    return await _mediator.Send(query);
        //}

    }
}





