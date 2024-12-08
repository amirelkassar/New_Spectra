using DocumentFormat.OpenXml.Spreadsheet;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.EmployeeGroups.Queries
{
    public class GetEmployeeGroupMemeberListQuery : IRequest<OperationResult>
    {
        public string OwnerId { get; set; }

        public class GetEmployeeGroupMemeberListQueryHandler(IBaseMongoDbRepository<Employee> empRepository,
            IBaseMongoDbRepository<EmployeeGroup> empGroupRepository,
             IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor,
            UserManager<AppUser> identityService) : IRequestHandler<GetEmployeeGroupMemeberListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;
            private readonly IBaseMongoDbRepository<EmployeeGroup> _empGroupRepository = empGroupRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly UserManager<AppUser> _identityService = identityService;

            public async Task<OperationResult> Handle(GetEmployeeGroupMemeberListQuery request, CancellationToken cancellationToken)
            {
                var owner = await _empRepository.GetByIdAsync(request.OwnerId) ?? throw new NotFoundException("Employees", request.OwnerId);
                var group = await _empGroupRepository.GetAsync(g => g.OwnerId == request.OwnerId);
                if (group == null)
                    return OperationResult.Success();

                var (memebers, total) = await _empRepository.GetAllAsync(e => group.Memebers.Any(m => m.Id == e.Id));
                var dtos = memebers.Adapt<IReadOnlyCollection<EmployeeListDto>>(EmployeeListDto.GetConfigurations());
                foreach (var dto in dtos)
                {
                    if (dto.UserImage is not null)
                    {
                        dto.UserImage= EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.UserImage), dto.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }
                return OperationResult<IReadOnlyCollection<EmployeeListDto>>.Success(dtos);
            }
        }
    }
}
