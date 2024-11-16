//using MediatR;
//using Spectra.Application.Employees.ManagementStaff;
//using Spectra.Application.Employees.MedicalStaff.Doctors;
//using Spectra.Application.Employees.MedicalStaff.Specialists;
//using Spectra.Application.MasterData.Sections;
//using Spectra.Application.MasterData.Sections.Queries;
//using Spectra.Domain.MasterData.Sections;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;

//namespace Spectra.Application.Admin.Queries
//{
//    public class GetEmployeeByIdQuery : IRequest<OperationResult<Section>>
//    {
//        public string Id { get; set; }
//        public JobTypes JobType { get; set; }

//    }

//    public class GetEmployeeByIdQueryHandler : IRequestHandler<GetEmployeeByIdQuery, OperationResult<Section>>
//    {
//        private readonly IDoctorRepository _doctorRepositor;
//        private readonly ISpecialistRepository _specialistRepository;
//        private readonly IManagementStaffRepository _staffRepository;



//        public GetEmployeeByIdQueryHandler(IDoctorRepository doctorRepositor, ISpecialistRepository specialistRepository, IManagementStaffRepository staffRepository)
//        {
//            _doctorRepositor = doctorRepositor;
//            _specialistRepository = specialistRepository;
//            _staffRepository = staffRepository;
//        }

//        public async Task<OperationResult<Section>> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
//        {

//            if (JobTypes.Doctor == request.JobType )
//            {
//                _doctorRepositor.
//            }

//            var entitiy = await _sectionsRepository.GetByIdAsync(request.Id);


       

//            return OperationResult<Section>.Success(entitiy);


//        }
//    }
//}
