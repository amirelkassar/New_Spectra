using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalTeams.NewFolder;
using Spectra.Application.Employees.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalTeams.Queries
{
    public class GetMedicalTeamByIdQuery : IRequest<OperationResult<IEnumerable<SpecialistDto>>>
    {
        public string DoctorId { get; set; }
    }

    public class GetMedicalTeamByIdQueryHandler : IRequestHandler<GetMedicalTeamByIdQuery, OperationResult<IEnumerable<SpecialistDto>>>
    {
        private readonly IMedicalTeamRepository _medicalTeamRepository;
        private readonly ISpecialistRepository _specialistRepository;

        public GetMedicalTeamByIdQueryHandler(IMedicalTeamRepository medicalTeamRepository , ISpecialistRepository specialistRepository )
        {
            _medicalTeamRepository = medicalTeamRepository;
            _specialistRepository = specialistRepository;
        }
        public async Task<OperationResult<IEnumerable<SpecialistDto>>> Handle(GetMedicalTeamByIdQuery request, CancellationToken cancellationToken)
        {


            var medicalTeam = await _medicalTeamRepository.GetByIdAsync(request.DoctorId);

            var specialists = await _specialistRepository.GetAllAsync(s=> medicalTeam.SpecialistIds.Contains(s.Id));

            var specialistsData = specialists.Select(x => new SpecialistDto { Name = $"{x.Name.FirstName} {x.Name.LastName}", Diagnoses = x.Diagnoses, Rate = 10 });








            return OperationResult<IEnumerable<SpecialistDto>>.Success(specialistsData);
        }
    }
}
