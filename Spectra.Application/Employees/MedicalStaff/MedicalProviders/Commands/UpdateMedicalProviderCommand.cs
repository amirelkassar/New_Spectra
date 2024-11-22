using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class UpdateMedicalProviderCommand : ICommand<OperationResult>
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
    }

    public class UpdatemedicalProviderCommandHandler : IRequestHandler<UpdateMedicalProviderCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<MedicalProvider, string> _medicalProvider;

        private readonly IHellper _addFile;

        public UpdatemedicalProviderCommandHandler(IBaseMongoDbRepository<MedicalProvider,string> medicalProvider, IHellper addFile)
        {
            _medicalProvider = medicalProvider;
            _addFile = addFile;
        }

        public async Task<OperationResult> Handle(UpdateMedicalProviderCommand request, CancellationToken cancellationToken)
        {

            var medicalProvider = await _medicalProvider.GetByIdAsync(request.Id) ?? throw new NotFoundException("MedicalProviders", request.Id);

            medicalProvider.Name = request.Name;
            medicalProvider.NationalId = request.NationalId;
            medicalProvider.MobileNumber = request.MobileNumber;
            medicalProvider.HumenGender = request.HumenGender;
            medicalProvider.EmailAddress = request.EmailAddress;
            medicalProvider.Address = request.Address;
            medicalProvider.JobType = request.JobType;
            medicalProvider.JobName = request.JobName;
            medicalProvider.JobDescription = request.JobDescription;
            medicalProvider.ExperienceYears = request.ExperienceYears;
            medicalProvider.Qualification = request.Qualification;
            medicalProvider.LicenseNumber = request.LicenseNumber;
            medicalProvider.ApprovedBy = request.ApprovedBy;
            medicalProvider.AcademicDegree = request.AcademicDegree;

            await _medicalProvider.UpdateAsync(medicalProvider);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
