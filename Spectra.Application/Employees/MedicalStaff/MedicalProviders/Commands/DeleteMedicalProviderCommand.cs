using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class DeleteMedicalProviderCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteDoctorCommandHandler : IRequestHandler<DeleteMedicalProviderCommand, OperationResult<Unit>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;

        private readonly IHellper _addFile;

        public DeleteDoctorCommandHandler(IMedicalProviderRepository medicalProvider, IHellper addFile)
        {
            _medicalProvider = medicalProvider;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteMedicalProviderCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _medicalProvider.GetByIdAsync(request.Id);
            await _addFile.DeleteAttachments(doctor.AttachmentPath);
            await _medicalProvider.DeleteAsync(doctor);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
