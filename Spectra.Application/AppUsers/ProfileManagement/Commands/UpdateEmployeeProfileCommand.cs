using System.ComponentModel.DataAnnotations;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.AppUsers.ProfileManagement.Commands
{
    public class UpdateEmployeeProfileCommand : IRequest<OperationResult>
    {
        public UpdateEmployeeProfileCommand()
        {
            Specializations = [];
        }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string? Prefix { get; set; }
        [Required]
        public string NationalId { get; set; }
        [Required]
        public HumenGender HumenGender { get; set; }
        [Required]
        [EmailAddress]
        public string Emailaddress { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        public string? State { get; set; }
        public string? StreetName { get; set; }
        public string? Building { get; set; }
        public string? PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        [Required]
        [Phone]
        public string? PhoneNumber { get; set; }
        public string? CountryCode { get; set; }

        public string? JobDescription { get; set; }
        public double? WorkingHours { get; set; }

        public string? LicenseNumber { get; set; }

        public int? ExperienceYears { get; set; }

        public string? Qualification { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public ICollection<string>? Specializations { get; set; }
        public string? NewPassword { get; set; }
        public string? OldPassword { get; set; }
        public IFormFile? UserImage { get; set; }

        public class UpdateEmployeeProfileCommandHandler(IIdentityService identityService,
            IBaseMongoDbRepository<Employee> employeeRepository,
            ICurrentUser currentUser,
            IDocumentHellper documentHellper,
            IBaseMongoDbRepository<Specialization> specializationRepository) : IRequestHandler<UpdateEmployeeProfileCommand, OperationResult>
        {
            private readonly IIdentityService _identityService = identityService;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IDocumentHellper _documentHellper = documentHellper;
            private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;

            public async Task<OperationResult> Handle(UpdateEmployeeProfileCommand request, CancellationToken cancellationToken)
            {
                var user = ((OperationResult<AppUser>)await _identityService.FindByIdAsync(_currentUser.Id)).Data;
                var employee = await _employeeRepository.GetAsync(e => e.UserId == _currentUser.Id);
                var folderPath = Path.Combine(Pathes.GetUsersPath(), employee.UserId);

                UpdateAddress(employee, request);
                UpdateProfessionalDetails(employee, request);

                if (request.UserImage is not null)
                {
                    var imagePath = await _documentHellper.CreateAttachment(request.UserImage, folderPath);
                    employee.UserImage = imagePath;
                    await _identityService.UpdateUserImageAsync(user.Id, imagePath);
                }

                await UpdateEmailAndPhoneAsync(user, employee, request);
                await UpdatePasswordAsync(request);
                await UpdateSpecializationsAsync(employee, request);

                await _identityService.UpdateUserAsync(user);
                await _employeeRepository.UpdateAsync(employee);

                return OperationResult.Success();
            }

            private void UpdateAddress(Employee employee, UpdateEmployeeProfileCommand request)
            {
                employee.Address.Country = request.Country;
                employee.Address.City = request.City;
                employee.Address.State = request.State;
                employee.Address.StreetName = request.StreetName;
                employee.Address.Building = request.Building;
                employee.Address.Floor = request.Floor;
                employee.Address.CommonMark = request.CommonMark;
                employee.Address.PostalCode = request.PostalCode;
            }

            private void UpdateProfessionalDetails(Employee employee, UpdateEmployeeProfileCommand request)
            {
                employee.NationalId = request.NationalId;
                employee.HumenGender = request.HumenGender;
                employee.JobDescription = request.JobDescription;
                employee.WorkingHours = request.WorkingHours;
                if (!employee.HasActiveContract)
                {
                    employee.LicenseNumber = request.LicenseNumber;
                    employee.ExperienceYears = request.ExperienceYears;
                    employee.Qualification = request.Qualification;
                    employee.ApprovedBy = request.ApprovedBy;
                    employee.AcademicDegree = request.AcademicDegree;
                }

            }

            private async Task UpdateEmailAndPhoneAsync(AppUser user, Employee employee, UpdateEmployeeProfileCommand request)
            {
                if (!string.Equals(employee.EmailAddress.Emailaddress, request.Emailaddress, StringComparison.OrdinalIgnoreCase))
                {
                    await _identityService.ChangeUserEmail(user.Id, request.Emailaddress);
                    employee.EmailAddress.Emailaddress = request.Emailaddress;
                }

                if (!string.Equals(employee.MobileNumber.PhoneNumbers, request.PhoneNumber, StringComparison.OrdinalIgnoreCase))
                {
                    await _identityService.ChangePhoneAsync(user.Id, request.PhoneNumber);
                    employee.MobileNumber.PhoneNumbers = request.PhoneNumber;
                    employee.MobileNumber.CountryCode = request.CountryCode;
                }
            }

            private async Task UpdatePasswordAsync(UpdateEmployeeProfileCommand request)
            {
                if (!string.IsNullOrWhiteSpace(request.NewPassword) && !string.IsNullOrWhiteSpace(request.OldPassword))
                {
                    var result = await _identityService.ChangeUserPassword(_currentUser.Id, request.OldPassword, request.NewPassword);
                    if (!result.SuccessOpration)
                    {
                        throw new FluentValidation.ValidationException("Password update failed.");
                    }
                }
            }

            private async Task UpdateSpecializationsAsync(Employee employee, UpdateEmployeeProfileCommand request)
            {
                if (!employee.HasActiveContract)
                {
                    var (allSpecializations, totalCount) = await _specializationRepository.GetAllAsync();
                    var validSpecializations = allSpecializations.Where(s => request.Specializations.Contains(s.Id)).ToList();

                    if (validSpecializations.Count != request.Specializations.Count)
                    {
                        throw new NotFoundException("Some specializations are invalid.", "id");
                    }

                    employee.Specializations = validSpecializations.Select(s => new EmployeeSpecialization
                    {
                        Id = s.Id,
                        EnName = s.EnName,
                        ArName = s.ArName
                    }).ToList();

                    var mainSpecialization = allSpecializations.FirstOrDefault(s => s.Id == request.MainSpecializationId);
                    if (mainSpecialization == null)
                    {
                        throw new NotFoundException("Main specialization not found.", "id");
                    }

                    employee.MainSpecializationId = request.MainSpecializationId;
                    employee.MainSpecializationEnName = mainSpecialization.EnName;
                    employee.MainSpecializationArName = mainSpecialization.ArName;
                }

            }
        }
    }
}
