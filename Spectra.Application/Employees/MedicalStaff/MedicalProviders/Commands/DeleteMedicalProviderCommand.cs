using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class DeleteMedicalProviderCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteDoctorCommandHandler : IRequestHandler<DeleteMedicalProviderCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<MedicalProvider, string> _medicalProvider;

        private readonly IHellper _addFile;

        public DeleteDoctorCommandHandler(IBaseMongoDbRepository<MedicalProvider, string> medicalProvider, IHellper addFile)
        {
            _medicalProvider = medicalProvider;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteMedicalProviderCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _medicalProvider.GetByIdAsync(request.Id);
            await _addFile.DeleteAttachments(doctor.Attachments.Select(a=>a.Path).ToList());
            await _medicalProvider.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
