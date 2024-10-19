using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Doctors.Commands
{


    public class UpdateDoctorRatesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public EmpelyeeRates empelyeeRate { get; set; }
    }

    public class UpdateDoctorRatesCommandHandler : IRequestHandler<UpdateDoctorRatesCommand, OperationResult<Unit>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly IHellper _addFile;
        public UpdateDoctorRatesCommandHandler(IDoctorRepository doctorRepository, IHellper addFile)
        {
            _doctorRepository = doctorRepository;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDoctorRatesCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.Id);

            doctor.EmpelyeeRate = request.empelyeeRate;
            await _doctorRepository.UpdateAsync(doctor);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
