using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.MedicalStaff.Doctors.Commands
{
    public class UpdateDoctorCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddresse { get; set; }
        public Address Address { get; set; }
        public string Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public IFormFile ScientificDegree { get; set; }
    }

    public class UpdateDoctorCommandHandler : IRequestHandler<UpdateDoctorCommand, OperationResult<Unit>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly IHellper _addFile;
        public UpdateDoctorCommandHandler(IDoctorRepository doctorRepository, IHellper addFile)
        {
            _doctorRepository = doctorRepository;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDoctorCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.Id);


            doctor.Name = request.Name;
            doctor.NationalId = request.NationalId;
            doctor.MobileNumber = request.MobileNumber;
            doctor.HumenGenders = request.HumenGenders;
            doctor.EmailAddress = request.EmailAddresse;
            doctor.Address = request.Address;
            doctor.Diagnoses = request.Diagnoses;
            doctor.LicenseNumber = request.LicenseNumber;
            doctor.ApprovedBy = request.ApprovedBy;
            if (request.ScientificDegree != null)
            {
                doctor.AttachmentPath = await _addFile.Updateattachment(doctor.AttachmentPath, request.ScientificDegree, Pathes.ScientificDegreeDoctors);
            }
            await _doctorRepository.UpdateAsync(doctor);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
