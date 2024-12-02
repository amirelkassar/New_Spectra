using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.Services;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.UserProfile.Commands
{
    public class EmployeeProfileManagementCommand : IRequest<OperationResult>
    {
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
        public HumenGender HumenGender { get; set; }
        public string Emailaddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string? State { get; set; }
        public string? StreetName { get; set; }
        public string? Building { get; set; }
        public string? PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        public string? PhoneNumber { get; set; }
        public string? CountryCode { get; set; }
        public string? LicenseNumber { get; set; }
        public ICollection<EmployeeAttachmentDto> Attachments { get; set; }
        public IFormFile UserImage { get; set; }

        public class EmployeeProfileManagementCommandHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<Employee> employeeRepository ) : IRequestHandler<EmployeeProfileManagementCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;

            public async Task<OperationResult> Handle(EmployeeProfileManagementCommand request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }
    }
}
