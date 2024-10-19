using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{

    public class GetAllDoctorEmpQuery : IRequest<OperationResult<PaginatedResult<Doctor>>>
    {

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public EmploymentStatus Status { get; set; }
    }

    public class GetAllDoctorEmpQueryHandler : IRequestHandler<GetAllDoctorEmpQuery, OperationResult<PaginatedResult<Doctor>>>
    {
        private readonly IDoctorRepository _doctorRepository;

        public GetAllDoctorEmpQueryHandler(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
        public async Task<OperationResult<PaginatedResult<Doctor>>> Handle(GetAllDoctorEmpQuery request, CancellationToken cancellationToken)
        {




            var paginatedDoctors = await _doctorRepository.GetAllAsyncA(c => c.Status == EmploymentStatus.Wating, null, request.PageNumber,
              request.PageSize);
            paginatedDoctors.Items.Select(c => new GetAllemployeeDto { Name = $"{c.Name.FirstName}+{c.Name.LastName}", DateOfRequest = c.Created.Date });

            return OperationResult<PaginatedResult<Doctor>>.Success(paginatedDoctors);
        }
    }

}
