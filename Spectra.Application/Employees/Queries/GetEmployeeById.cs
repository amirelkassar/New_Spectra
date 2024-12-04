using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System.Net.Mail;

namespace Spectra.Application.Employees.Queries
{
    public class GetEmployeeById : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string UserId { get; set; }

        public class GetMedicalProviderByIdHandler(IBaseMongoDbRepository<Employee> doctorRepository,
            IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor,
            UserManager<AppUser> identityService) : IRequestHandler<GetEmployeeById, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _doctorRepository = doctorRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly UserManager<AppUser> _identityService = identityService;

            public async Task<OperationResult> Handle(GetEmployeeById request, CancellationToken cancellationToken)
            {
                Employee medicalProvider = null;
                if (!string.IsNullOrWhiteSpace(request.UserId))
                {
                    medicalProvider = await _doctorRepository.GetAsync(m => m.UserId == request.UserId && m.Id == request.Id) ?? throw new NotFoundException("Employees", request.Id);
                }
                else
                {
                    medicalProvider = await _doctorRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Employees", request.Id);
                }

                var dto = medicalProvider.Adapt<EmployeeByIdDto>(EmployeeByIdDto.GetConfiguration());
                var user = await _identityService.FindByIdAsync(dto.Id);
                foreach (var attachment in dto.Attachments)
                {
                    if (attachment.Path is not null)
                    {
                        attachment.Path = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, attachment.Path),medicalProvider.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }

                if (user is not null && user.UserImage is not null)
                {
                    dto.UserImage= EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, user.UserImage), medicalProvider.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                }

                return OperationResult<EmployeeByIdDto>.Success(dto);
            }
        }
    }
}
