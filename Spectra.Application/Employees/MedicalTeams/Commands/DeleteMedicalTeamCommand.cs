using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalTeams.Commands
{
    public class DeleteMedicalTeamCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteMedicalTeamCommandHandler : IRequestHandler<DeleteMedicalTeamCommand, OperationResult<Unit>>
    {
        private readonly IMedicalTeamRepository _medicalTeamRepository;

        public DeleteMedicalTeamCommandHandler(IMedicalTeamRepository medicalTeamRepository)
        {
            _medicalTeamRepository = medicalTeamRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteMedicalTeamCommand request, CancellationToken cancellationToken)
        {

            var medicalTeam = await _medicalTeamRepository.GetByIdAsync(request.Id);

            await _medicalTeamRepository.DeleteAsync(medicalTeam);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
