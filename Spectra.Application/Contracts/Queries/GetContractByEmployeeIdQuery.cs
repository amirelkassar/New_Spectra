using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractByEmployeeIdQuery : IRequest<OperationResult>
    {
        public string EmployeeId { get; set; }

        public class GetContractByEmployeeIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser,
            IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<GetContractByEmployeeIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            public async Task<OperationResult> Handle(GetContractByEmployeeIdQuery request, CancellationToken cancellationToken)
            {
                EmploymentContract contract = await _contractRepository.GetAsync(c => c.EmployeeId == request.EmployeeId) ?? throw new NotFoundException("Contracts", request.EmployeeId);


                var contractDto = contract.Adapt<ContractReadDto>();
                if (contractDto.Versions is not null && contractDto.Versions.Count > 0)
                {
                    contractDto.Versions = contractDto.Versions.OrderByDescending(v => v.Order).ToArray();
                }

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
