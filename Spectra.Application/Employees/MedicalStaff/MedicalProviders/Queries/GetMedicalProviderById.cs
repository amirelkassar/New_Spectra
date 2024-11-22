using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetMedicalProviderById : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetMedicalProviderByIdHandler(IBaseMongoDbRepository<MedicalProvider, string> doctorRepository) : IRequestHandler<GetMedicalProviderById, OperationResult>
        {
            private readonly IBaseMongoDbRepository<MedicalProvider, string> _doctorRepository = doctorRepository;

            public async Task<OperationResult> Handle(GetMedicalProviderById request, CancellationToken cancellationToken)
            {
                var medicalProvider = await _doctorRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("MedicalProviders", request.Id);

                return OperationResult<MedicalProvider>.Success(medicalProvider);
            }
        }
    }
}
