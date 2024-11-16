using MediatR;
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{

    public class GetAllSectionsQuery : IRequest<OperationResult<IEnumerable<SectionDto>>>
    {
   

    }
    public class GetAllSectionsQueryHandler : IRequestHandler<GetAllSectionsQuery, OperationResult<IEnumerable<SectionDto>>>
    {
        private readonly ISectionsRepository _sectionsRepository;




        public GetAllSectionsQueryHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }

        public async Task<OperationResult<IEnumerable<SectionDto>>> Handle(GetAllSectionsQuery request, CancellationToken cancellationToken)
        {

            var entity = await _sectionsRepository.GetAllAsync();
            var sections= entity.Select(x => new SectionDto { CountDiagnoses = x.Diagnoses.Count(), Name = x.Name, DoctorName = x.DoctorName, Id= x.Id });

            return OperationResult<IEnumerable<SectionDto>>.Success(sections);

        }
    }
}
