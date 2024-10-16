using MediatR;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Patients;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{

    public class GetSpecializationByIdQuery : IRequest<OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>>
    {
        public string Id { get; set; }
    }

    public class GetSpecializationByIdQueryHandler : IRequestHandler<GetSpecializationByIdQuery, OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public GetSpecializationByIdQueryHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }


        public async Task<OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>> Handle(GetSpecializationByIdQuery request, CancellationToken cancellationToken)
        {

            
            
                var Specialization = await _specializationRepository.GetByIdAsync(request.Id);
                if (Specialization == null)
                {
                    throw new NotFoundException("Specialization", request.Id);
                }


                return OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>.Success(Specialization);
            
         
           
         
        }
    }

}

