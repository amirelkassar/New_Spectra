using MediatR;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{
    public class GetAllDoctorsInSectionQuery : IRequest<OperationResult<IEnumerable<GetAllDoctorsDto>>>
    {


    }

    public class GetAllDoctorsInSectionQueryHandler : IRequestHandler<GetAllDoctorsInSectionQuery, OperationResult<IEnumerable<GetAllDoctorsDto>>>
    {
        private readonly IDoctorRepository _doctorRepository;

        public GetAllDoctorsInSectionQueryHandler(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        public async Task<OperationResult<IEnumerable<GetAllDoctorsDto>>> Handle(GetAllDoctorsInSectionQuery request, CancellationToken cancellationToken)
        {
            var doctors = await _doctorRepository.GetAllAsync();

            var data = doctors.Select(c => new GetAllDoctorsDto
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
