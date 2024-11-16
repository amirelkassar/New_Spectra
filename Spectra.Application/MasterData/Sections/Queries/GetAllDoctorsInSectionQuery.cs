using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
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
        private readonly IMedicalProviderRepository _doctorRepository;

        public GetAllDoctorsInSectionQueryHandler(IMedicalProviderRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        public async Task<OperationResult<IEnumerable<GetAllDoctorsDto>>> Handle(GetAllDoctorsInSectionQuery request, CancellationToken cancellationToken)
        {
            var MedicalProvider = await _doctorRepository.GetAllAsync(x => x.JobType == JobTypes.Doctor);

            var data = MedicalProvider.Select(c => new GetAllDoctorsDto
            {
                Name = $"{c.Name.FirstName} {c.Name.LastName}",
                DateOfRequest = c.Created.Date,
                Rate = c.EmpelyeeRate,
                Id = c.Id,
                Diagnoses = c.Diagnoses
            });

            return OperationResult<IEnumerable<GetAllDoctorsDto>>.Success(data);
        }
    }

}
