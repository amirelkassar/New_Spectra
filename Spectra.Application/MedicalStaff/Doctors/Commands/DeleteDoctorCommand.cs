using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Doctors.Commands
{
    public class DeleteDoctorCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteDoctorCommandHandler : IRequestHandler<DeleteDoctorCommand, OperationResult<Unit>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly IHellper _addFile;

        public DeleteDoctorCommandHandler(IDoctorRepository doctorRepository, IHellper addFile)
        {
            _doctorRepository = doctorRepository;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteDoctorCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.Id);
            await _addFile.Deleteattachment(doctor.AttachmentPath);
            await _doctorRepository.DeleteAsync(doctor);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
