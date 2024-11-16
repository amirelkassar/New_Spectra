using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Employees.ManagementStaff;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{
    public class GetAllEmployeesQuery : IRequest<OperationResult<CollectAllEmployeeDto>>
    {
        public int PageNumber { get; set; } 
        public int PageSize { get; set; }
        public JobTypes? JobType { get; set; }
    }

    public class GetAllEmployeesQueryHandler : IRequestHandler<GetAllEmployeesQuery, OperationResult<CollectAllEmployeeDto>>
    {
        private readonly IMedicalProviderRepository _doctorRepositor;
        private readonly IMedicalProviderRepository _specialistRepository;
        private readonly IManagementStaffRepository _staffRepository;
        public GetAllEmployeesQueryHandler(IMedicalProviderRepository doctorRepositor , IMedicalProviderRepository specialistRepository , IManagementStaffRepository managementStaffRepository )
        {
            _doctorRepositor = doctorRepositor;
            _specialistRepository = specialistRepository;
            _staffRepository = managementStaffRepository;
    }

        public async Task<OperationResult<CollectAllEmployeeDto>> Handle(GetAllEmployeesQuery request, CancellationToken cancellationToken)
        {



            var doctors = await _doctorRepositor.GetAllAsync(x=>x.JobType== JobTypes.Doctor);
            var specialists = await _specialistRepository.GetAllAsync(x => x.JobType == JobTypes.Specialist);
            var managementStaff = await _staffRepository.GetAllAsync();


            var allEmployees = doctors.Select(c => new GetAllEmployeesDto
            {
                Id = c.Id,
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                Email = c.EmailAddress.Emailaddress,
                TimeToJoin = c.Created.Date,
                JopType = Enum.GetName(typeof(JobTypes), JobTypes.Doctor)

            }).ToList();

            allEmployees.AddRange(specialists.Select(c => new GetAllEmployeesDto
            {
                Id = c.Id,
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                Email = c.EmailAddress.Emailaddress,
                TimeToJoin = c.Created.Date,
                JopType = Enum.GetName(typeof(JobTypes), JobTypes.Specialist)
            })
 .Concat(managementStaff.Select(c => new GetAllEmployeesDto
 {
     Id = c.Id,
     Name = $"{c.Name.FirstName} {c.Name.LastName}",
     Email = c.EmailAddress.Emailaddress,
     TimeToJoin = c.Created.Date,
     JopType = Enum.GetName(typeof(JobTypes), c.JobType)
 })));


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
