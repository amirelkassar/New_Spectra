
using MediatR;
using MongoDB.Driver;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.Messaging;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Commands
{

    public class UpdateDoctorsEmploymentStatusCommand : ICommand<OperationResult<Unit>>
    {
        public List<string> Ids { get; set; }
        public EmploymentStatus Status { get; set; }
    }


    public class UpdateDoctorsEmploymentStatusCommandHandler : IRequestHandler<UpdateDoctorsEmploymentStatusCommand, OperationResult<Unit>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly ISpecializationsRepository _specializationRepository;

        public UpdateDoctorsEmploymentStatusCommandHandler(IDoctorRepository doctorRepository, ISpecializationsRepository specializationRepository)
        {
            _doctorRepository = doctorRepository;
            _specializationRepository = specializationRepository;

        }

        public async Task<OperationResult<Unit>> Handle(UpdateDoctorsEmploymentStatusCommand request, CancellationToken cancellationToken)
        {
            // Filter to get doctors whose Status is "Wating" and whose Id is in the provided list
            var filter = Builders<Doctor>.Filter.And(
                Builders<Doctor>.Filter.Eq(d => d.Status, EmploymentStatus.Wating),
                Builders<Doctor>.Filter.In(d => d.Id, request.Ids)
            );

            // Fetch all matching doctors
            var doctors = await _doctorRepository.GetAllAsync(d => request.Ids.Contains(d.Id));

            if (doctors == null || !doctors.Any())
            {
                throw new RequestErrorException("No matching doctors found.");
            }

            // Perform the necessary updates (for example, update status for all)
            var update = Builders<Doctor>.Update.Set(d => d.Status, request.Status);
            var updateResult = await _doctorRepository.UpdateManyAsync(filter, update);

            if (updateResult.ModifiedCount == 0)
            {
                throw new RequestErrorException("No doctors were updated.");
            }

            if (request.Status == EmploymentStatus.Available)
            {
                foreach (var doctor in doctors)
                {
                    var specialization = await _specializationRepository.GetByNameAsync(doctor.Diagnoses);
                    specialization.DoctorCount += 1;
                    await _specializationRepository.UpdateAsync(specialization);

                }
            }

            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
