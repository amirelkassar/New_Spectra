using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Commands
{
    public class UpdateDoctorEmploymentStatusCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public EmploymentStatus Status { get; set; }
    }

    public class UpdateDoctorEmploymentStatusCommandHandler : IRequestHandler<UpdateDoctorEmploymentStatusCommand, OperationResult<Unit>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly ISpecializationsRepository _specializationRepository;
    
        public UpdateDoctorEmploymentStatusCommandHandler(IDoctorRepository doctorRepository,  ISpecializationsRepository specializationRepository)
        {
            _doctorRepository = doctorRepository;
            _specializationRepository = specializationRepository;
   
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDoctorEmploymentStatusCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.Id);

            var specialization = await _specializationRepository.GetByNameAsync(doctor.Diagnoses);
            specialization.DoctorCount += 1;

            doctor.Status= request.Status;

            await _specializationRepository.UpdateAsync(specialization);
            await _doctorRepository.UpdateAsync(doctor);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }

}
