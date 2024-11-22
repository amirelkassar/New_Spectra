using MediatR;
using Spectra.Application.Employees;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{
    public class GetAllDoctorsInSectionQuery : IRequest<OperationResult<IEnumerable<GetAllDoctorsDto>>>
    {


    }

    public class GetAllDoctorsInSectionQueryHandler : IRequestHandler<GetAllDoctorsInSectionQuery, OperationResult<IEnumerable<GetAllDoctorsDto>>>
    {
        private readonly IEmployeeRepository _doctorRepository;

        public GetAllDoctorsInSectionQueryHandler(IEmployeeRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        public async Task<OperationResult<IEnumerable<GetAllDoctorsDto>>> Handle(GetAllDoctorsInSectionQuery request, CancellationToken cancellationToken)
        {
            var (emps, total) = await _doctorRepository.GetAllAsync(x => x.JobType == JobTypes.Doctor);

            var data = emps.Select(c => new GetAllDoctorsDto
            {
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                DateOfRequest = c.Created.Date,
                Id = c.Id,
            });

            return OperationResult<IEnumerable<GetAllDoctorsDto>>.Success(data);
        }
    }

}
