using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Specialists.Commands
{
    public class DeleteSpecialistCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteSpecialistCommandHandler : IRequestHandler<DeleteSpecialistCommand, OperationResult<Unit>>
    {
        private readonly ISpecialistRepository _specialistRepository;
        private readonly IHellper _addFile;

        public DeleteSpecialistCommandHandler(ISpecialistRepository specialistRepository, IHellper addFile)
        {
            _specialistRepository = specialistRepository;

            _addFile = addFile;
        }
        public async Task<OperationResult<Unit>> Handle(DeleteSpecialistCommand request, CancellationToken cancellationToken)
        {

            var specialist = await _specialistRepository.GetByIdAsync(request.Id);
<<<<<<< HEAD
            await _addFile.Deleteattachment(specialist.AttachmentPath);
=======
            await _addFile.DeleteAttachments(specialist.AttachmentPath);
>>>>>>> Admin-BackEnd
            await _specialistRepository.DeleteAsync(specialist);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
