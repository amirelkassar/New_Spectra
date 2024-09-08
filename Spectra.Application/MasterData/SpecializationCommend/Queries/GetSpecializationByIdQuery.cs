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

    public class GetSpecializationByIdQuery : IRequest<Domain.MasterData.DoctorsSpecialization.Specializations>
    {
        public string Id { get; set; }
    }

    public class GetSpecializationByIdQueryHandler : IRequestHandler<GetSpecializationByIdQuery, Domain.MasterData.DoctorsSpecialization.Specializations>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public GetSpecializationByIdQueryHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }


        public async Task<Domain.MasterData.DoctorsSpecialization.Specializations> Handle(GetSpecializationByIdQuery request, CancellationToken cancellationToken)
        {
            var Specialization = await _specializationRepository.GetByIdAsync(request.Id);
            if (Specialization == null)
            {
                throw new Exception("Specialization not found");
            }
            return Specialization;
        }
    }

}

