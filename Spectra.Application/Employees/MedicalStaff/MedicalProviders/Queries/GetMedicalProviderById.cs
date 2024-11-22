using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetMedicalProviderById : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string UserId { get; set; }

        public class GetMedicalProviderByIdHandler(IBaseMongoDbRepository<Employee, string> doctorRepository) : IRequestHandler<GetMedicalProviderById, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee, string> _doctorRepository = doctorRepository;

            public async Task<OperationResult> Handle(GetMedicalProviderById request, CancellationToken cancellationToken)
            {
                Employee medicalProvider = null;
                if (!string.IsNullOrWhiteSpace(request.UserId))
                {
                    medicalProvider = await _doctorRepository.GetAsync(m => m.UserId == request.UserId && m.Id == request.Id) ?? throw new NotFoundException("MedicalProviders", request.Id);
                }
                else
                {
                    medicalProvider = await _doctorRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("MedicalProviders", request.Id);
                }


                return OperationResult<Employee>.Success(medicalProvider);
            }
        }
    }
}
