using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MedicalTeam;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalTeams.Commands
{
    public class CreateMedicalTeamCommand : ICommand<OperationResult<string>>
    {
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }
        public List<string> SpecialistIds { get; set; }


    }

    public  class CreateMedicalTeamCommandHandler : IRequestHandler<CreateMedicalTeamCommand, OperationResult<string>>
    {
        private readonly IMedicalTeamRepository _medicalTeamRepository;

        public CreateMedicalTeamCommandHandler(IMedicalTeamRepository medicalTeamRepository)
        {
            _medicalTeamRepository = medicalTeamRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateMedicalTeamCommand request, CancellationToken cancellationToken)
        {

            var medicalTeam = MedicalTeam.Create(
                 Ulid.NewUlid().ToString(),
               request.DoctorId,
               request.SpecialistIds,
               request.DoctorName
                );


           await _medicalTeamRepository.AddAsync(medicalTeam);



            return OperationResult<string>.Success(medicalTeam.Id);


        }
    }


}
