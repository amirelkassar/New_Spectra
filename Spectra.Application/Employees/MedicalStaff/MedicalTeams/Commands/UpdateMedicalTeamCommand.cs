using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalTeams.Commands
{
    public class UpdateMedicalTeamCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }
        public List<string> SpecialistIds { get; set; }
    }

    public class UpdateSpecialistCommandHandler : IRequestHandler<UpdateMedicalTeamCommand, OperationResult<Unit>>
    {
        private readonly IMedicalTeamRepository _medicalTeamRepository;

        public UpdateSpecialistCommandHandler(IMedicalTeamRepository medicalTeamRepository)
        {
            _medicalTeamRepository = medicalTeamRepository;
        }
        public async Task<OperationResult<Unit>> Handle(UpdateMedicalTeamCommand request, CancellationToken cancellationToken)
        {

            var medicalTeam = await _medicalTeamRepository.GetByIdAsync(request.Id);

            medicalTeam.DoctorId=request.DoctorId;
            medicalTeam.DoctorName=request.DoctorName;
            medicalTeam.SpecialistIds=request.SpecialistIds;


            await _medicalTeamRepository.UpdateAsync(medicalTeam);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
