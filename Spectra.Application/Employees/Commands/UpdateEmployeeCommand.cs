using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
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
        public string LicenseNumber { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string ApprovedBy { get; set; }
        public AcademicDegrees AcademicDegree { get; set; }
        public double? WorkingHours { get; set; }
    }

    public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployeeCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Employee, string> _empRepo;
        public UpdateEmployeeCommandHandler(IBaseMongoDbRepository<Employee, string> empRepo)
        {
            _empRepo = empRepo;
        }

        public async Task<OperationResult> Handle(UpdateEmployeeCommand request, CancellationToken cancellationToken)
        {

            var employee = await _empRepo.GetByIdAsync(request.Id) ?? throw new NotFoundException("MedicalProviders", request.Id);

            employee.Name = request.Name;
            employee.NationalId = request.NationalId;
            employee.MobileNumber = request.MobileNumber;
            employee.HumenGender = request.HumenGender;
            employee.EmailAddress = request.EmailAddress;
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

            await _empRepo.UpdateAsync(employee);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
