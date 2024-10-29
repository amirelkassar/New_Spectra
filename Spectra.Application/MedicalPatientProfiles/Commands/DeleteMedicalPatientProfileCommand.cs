using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MedicalPatientProfiles.Commands
{
    public class DeleteMedicalPatientProfileCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalPatientProfileCommandHandler : IRequestHandler<DeleteMedicalPatientProfileCommand, OperationResult<Unit>>
    {
         private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;
   

        public DeleteMedicalPatientProfileCommandHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
        {
            _medicalPatientProfileRepository = medicalPatientProfileRepository;

        }

        public async Task<OperationResult<Unit>> Handle(DeleteMedicalPatientProfileCommand request, CancellationToken cancellationToken)
        {

            var entity = await _medicalPatientProfileRepository.GetByIdAsync(request.Id);


            await _medicalPatientProfileRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
