using FluentValidation.Results;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.Commands
{
    public class UpdateEmployeeCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGender { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public string? JobDescription { get; set; }
        public string? LicenseNumber { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public double? WorkingHours { get; set; }
        public IFormFile? UserImage { get; set; }
        public string? Password { get; set; }
    }

    public class UpdateEmployeeCommandHandler(IBaseMongoDbRepository<Employee> empRepo,
        IDocumentHellper documentHellper,
        IIdentityService identityService) : IRequestHandler<UpdateEmployeeCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Employee> _empRepo = empRepo;
        private readonly IDocumentHellper _documentHellper = documentHellper;
        private readonly IIdentityService _identityService = identityService;

        public async Task<OperationResult> Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
        {

            var employee = await _empRepo.GetByIdAsync(request.Id) ?? throw new NotFoundException("Employees", request.Id);

            if (await _empRepo.Exists(e => e.Id != employee.Id && e.EmailAddress.Emailaddress.ToLower() == request.EmailAddress.Emailaddress))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            if (!string.IsNullOrWhiteSpace(request.Password) && !StringExtensionHelper.IsPassword(request.Password))
            {
                throw new ValidationException([new ValidationFailure("Password", "Invalid Password Format")]);
            }


            employee.Name = request.Name;
            employee.NationalId = request.NationalId;
            employee.MobileNumber = request.MobileNumber;
            employee.HumenGender = request.HumenGender;
            employee.Address = request.Address;
            employee.JobType = request.JobType;
            employee.JobName = request.JobName;
            employee.JobDescription = request.JobDescription;
            employee.ExperienceYears = request.ExperienceYears;
            employee.Qualification = request.Qualification;
            employee.LicenseNumber = request.LicenseNumber;
            employee.ApprovedBy = request.ApprovedBy;
            employee.AcademicDegree = request.AcademicDegree;
            employee.WorkingHours = request.WorkingHours;

            if (request.UserImage is not null && request.UserImage.Length > 0)
            {
                var folderPath = Path.Combine(Pathes.GetUsersPath(), employee.UserId);
                var imagePath = await _documentHellper.CreateAttachment(request.UserImage, folderPath);
                await _identityService.UpdateUserImageAsync(employee.UserId, imagePath);
                employee.UserImage = imagePath;
            }

            if (!request.EmailAddress.Emailaddress.Equals(employee.EmailAddress.Emailaddress, StringComparison.OrdinalIgnoreCase))
            {
                await _identityService.ChangeUserEmail(employee.UserId, request.EmailAddress.Emailaddress);
            }

            if (!string.IsNullOrWhiteSpace(request.Password))
            {
                await _identityService.ChangeUserPassword(employee.UserId, request.Password);
            }
            employee.EmailAddress = request.EmailAddress;
            await _empRepo.UpdateAsync(employee);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
