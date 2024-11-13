using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Hellper;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{

    public class GetAllDoctorEmpQuery : IRequest<OperationResult<PaginatedResult<MedicalProvider>>>
    {

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        //public EmploymentStatus Status { get; set; }
    }

    public class GetAllDoctorEmpQueryHandler : IRequestHandler<GetAllDoctorEmpQuery, OperationResult<PaginatedResult<MedicalProvider>>>
    {
        private readonly IMedicalProviderRepository _doctorRepository;

        public GetAllDoctorEmpQueryHandler(IMedicalProviderRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
        public async Task<OperationResult<PaginatedResult<MedicalProvider>>> Handle(GetAllDoctorEmpQuery request, CancellationToken cancellationToken)
        {


            var paginatedDoctors = await _doctorRepository.GetAllAsyncA(x=>x.JobType==  JobTypes.Doctor,null  ,request.PageNumber,
              request.PageSize);
            paginatedDoctors.Items.Select(c => new GetAllemployeeDto { Name =$"{c.Name.FirstName}+{c.Name.LastName}", DateOfRequest = c.Created.Date});

            return OperationResult<PaginatedResult<MedicalProvider>>.Success(paginatedDoctors);
        }
    }

}
