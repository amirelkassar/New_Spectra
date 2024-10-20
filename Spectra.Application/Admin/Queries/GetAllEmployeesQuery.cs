using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{
    public class GetAllEmployeesQuery : IRequest<OperationResult<CollectAllEmployeeDto>>
    {

    }

    public class GetAllEmployeesQueryHandler : IRequestHandler<GetAllEmployeesQuery, OperationResult<CollectAllEmployeeDto>>
    {
        private readonly IDoctorRepository _doctorRepositor;
        private readonly ISpecialistRepository _specialistRepository;
        public GetAllEmployeesQueryHandler(IDoctorRepository doctorRepositor , ISpecialistRepository specialistRepository)
        {
            _doctorRepositor = doctorRepositor;
            _specialistRepository = specialistRepository;
        }

        public async Task<OperationResult<CollectAllEmployeeDto>> Handle(GetAllEmployeesQuery request, CancellationToken cancellationToken)
        {


            var Doctors = await _doctorRepositor.GetAllAsync();
            var Specialists = await _specialistRepository.GetAllAsync();

            var DoctorsData = Doctors.Select(c => new GetAllEmployeesDto { Name = $"{c.Name.FirstName} + {c.Name.LastName}",
                Email = c.EmailAddress.Emailaddress,TimeToJoin=c.Created.Date });

            var SpecialistsDatas = Specialists.Select(c => new GetAllEmployeesDto { Name = $"{c.Name.FirstName} + {c.Name.LastName}", 
                Email = c.EmailAddress.Emailaddress,TimeToJoin=c.Created.Date });

            var CollectEmpleyees = new CollectAllEmployeeDto { Doctors = DoctorsData, Specialists = SpecialistsDatas };



            return OperationResult<CollectAllEmployeeDto>.Success(CollectEmpleyees);
        }
    }
}
