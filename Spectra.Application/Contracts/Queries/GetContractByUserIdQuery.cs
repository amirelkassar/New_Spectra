using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractByUserIdQuery : IRequest<OperationResult>
    {
        public class GetContractByUserIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser,
             IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<GetContractByUserIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

            public async Task<OperationResult> Handle(GetContractByUserIdQuery request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.EmployeeUserId == _currentUser.Id);
                if (contract is null)
                {
                    return OperationResult.Success();
                }
                var contractDto = contract.Adapt<ContractReadDto>();
                contractDto.Versions = [.. contractDto.Versions.OrderByDescending(v => v.Order)];

                if (!string.IsNullOrWhiteSpace(contract.AdminSignaturePath))
                {
                    contractDto.AdminSignaturePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, contractDto.AdminSignaturePath), EndPointsRoutes.Users, _httpContextAccessor);
                }

                if (!string.IsNullOrWhiteSpace(contract.DoctorSignaturePath))
                {
                    contractDto.DoctorSignaturePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, contractDto.DoctorSignaturePath), EndPointsRoutes.Users, _httpContextAccessor);
                }

                if (!string.IsNullOrWhiteSpace(contract.HeadSignaturePath))
                {
                    contractDto.HeadSignaturePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, contractDto.HeadSignaturePath), EndPointsRoutes.Users, _httpContextAccessor);
                }

                return OperationResult<ContractReadDto>.Success(contractDto);
            }
        }
    }
}
