using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.Messaging;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using Microsoft.AspNetCore.Http;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Application.MedicalStaff.Specialists;

namespace Spectra.Application.Admin.Commands
{
    public class CreateEmployeesCommand : ICommand<OperationResult<string>>
    {
        public JobTypes JobTypes { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
        public HumenGender HumenGenders { get; set; }
        public string Emailaddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string PhoneNumbers { get; set; }
        public string CountryCode { get; set; }
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile> ScientificDegree { get; set; }

    }
}
    //public class CreateDoctorCommandHandler : IRequestHandler<CreateEmployeesCommand, OperationResult<string>>
    //{
        //private readonly IDoctorRepository _doctorRepository;
        //private readonly ISpecializationsRepository _specializationRepository;
        //private readonly IHellper _addFile;
        //private readonly ISpecialistRepository _specialistRepository;
        //public CreateDoctorCommandHandler(IDoctorRepository doctorRepository, IHellper addFile, ISpecializationsRepository specializationRepository, ISpecialistRepository specialistRepository)
        //{
        //    _doctorRepository = doctorRepository;
        //    _specializationRepository = specializationRepository;
        //    _addFile = addFile;
        //    _specialistRepository = specialistRepository;
        //}
        //public async Task<OperationResult<string>> Handle(CreateEmployeesCommand request, CancellationToken cancellationToken)
        //{

        //    if (JobTypes.Doctor == request.JobTypes)
        //    {


        //        List<string>? filePath = null;
        //        var uploadfile = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeDoctors);
        //        if (uploadfile != null)
        //        {
        //            filePath = uploadfile;
        //        }

        //        var specialization = await _specializationRepository.GetByNameAsync(request.Diagnoses);
        //        specialization.DoctorCount += 1;

        //        var doctor = Doctor.Create(
        //            Ulid.NewUlid().ToString(),
        //            request.Name,
        //            request.NationalId,
        //            request.MobileNumber,
        //            request.EmailAddress,
        //            request.HumenGenders,
        //            request.Address,
        //            request.Diagnoses,
        //            request.LicenseNumber,
        //            request.ApprovedBy,
        //            request.Academicdegree,
        //            filePath,
        //            request.empelyeeRate = 0
        //            );

        //        await _specializationRepository.UpdateAsync(specialization);
        //        await _doctorRepository.AddAsync(doctor);
        //        return OperationResult<string>.Success(doctor.Id);
        //    }

        //    if (JobTypes.Specialist == request.JobTypes)
        //    {

        //        List<string>? filePath = null;
        //        var uploadfile = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
        //        if (uploadfile != null)
        //        {
        //            filePath = uploadfile;
        //        }


        //        var specialist = Specialist.Create(
        //            Ulid.NewUlid().ToString(),
        //            request.Name,
        //            request.NationalId,
        //            request.MobileNumber,
        //            request.EmailAddress,
        //            request.HumenGenders,
        //            request.Address,
        //            request.Diagnoses,
        //            request.LicenseNumber,
        //            request.ApprovedBy,
        //            request.Academicdegree,
        //            filePath,
        //            request.empelyeeRate = 0
        //            );

           
        //        await _specialistRepository.AddAsync(specialist);
        //        return OperationResult<string>.Success(specialist.Id);
        //    }



//            return OperationResult<string>.Success("done");

//        }
//    }
//}
