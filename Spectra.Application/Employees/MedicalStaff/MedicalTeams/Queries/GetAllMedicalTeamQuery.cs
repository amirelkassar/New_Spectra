//using MediatR;
//using Spectra.Application.Employees.MedicalStaff.Specialists;
//using Spectra.Domain.Employees.MedicalStaff.Specialists;
//using Spectra.Domain.Shared.Common;
//using Spectra.Domain.Shared.Wrappers;

//namespace Spectra.Application.Employees.MedicalTeams.Queries
//{
//    public class GetAllMedicalTeamQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<Specialist>>>
//    {
//        public string DoctorId { get; set; }
//    }

//    public class GetAllMedicalTeamQueryHandler : IRequestHandler<GetAllMedicalTeamQuery, OperationResult<IEnumerable<Specialist>>>
//    {
//        private readonly IMedicalTeamRepository _medicalTeamRepository;

//        public GetAllMedicalTeamQueryHandler(IMedicalTeamRepository medicalTeamRepository)
//        {
//            _medicalTeamRepository = medicalTeamRepository;
//        }

//        public async Task<OperationResult<IEnumerable<Specialist>>> Handle(GetAllMedicalTeamQuery request, CancellationToken cancellationToken)
//        {
//            var Specialist = await _medicalTeamRepository.GetAllAsync(x=>x.DoctorId== DoctorId);

//            return OperationResult<IEnumerable<Specialist>>.Success(Specialist);


//        }
//    }
//}
