using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Application.Employees.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{
    public class GetAllEmployeesQuery : IRequest<OperationResult<CollectAllEmployeeDto>>
    {
        public int PageNumber { get; set; } 
        public int PageSize { get; set; } 
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


         
            var doctors = await _doctorRepositor.GetAllAsync();
            var specialists = await _specialistRepository.GetAllAsync();

        
            var allEmployees = doctors.Select(c => new GetAllEmployeesDto
            {
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                Email = c.EmailAddress.Emailaddress,
                TimeToJoin = c.Created.Date,
                JopType="Doctor"

            }).ToList();

            allEmployees.AddRange(specialists.Select(c => new GetAllEmployeesDto
            {
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                Email = c.EmailAddress.Emailaddress,
                TimeToJoin = c.Created.Date,
                JopType= "Specialist"
            }));

            
            var totalItems = allEmployees.Count;
            var totalPages = (int)Math.Ceiling(totalItems / (double)request.PageSize);

            var paginatedEmployees = allEmployees
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToList();

           
            var collectEmployees = new CollectAllEmployeeDto
            {
                Employees = paginatedEmployees, 
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                TotalPages = totalPages,
                TotalItems = totalItems
            };

            return OperationResult<CollectAllEmployeeDto>.Success(collectEmployees);
        }
    }
}
