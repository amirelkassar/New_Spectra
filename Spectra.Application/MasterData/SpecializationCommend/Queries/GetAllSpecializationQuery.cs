using MediatR;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Patients;
using Spectra.Domain.Patients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{


    public class GetAllSpecializationQuery : IRequest<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specializations>>
    {
    }

    public class GetAllSpecializationQueryHandler : IRequestHandler<GetAllSpecializationQuery, IEnumerable<Domain.MasterData.DoctorsSpecialization.Specializations>>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public GetAllSpecializationQueryHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }

        public async Task<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specializations>> Handle(GetAllSpecializationQuery request, CancellationToken cancellationToken)
        {
            return await _specializationRepository.GetAllAsync();
        }
    }
}
