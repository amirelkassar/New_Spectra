using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
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
            await _addFile.DeleteAttachments(specialist.AttachmentPath);
            await _specialistRepository.DeleteAsync(specialist);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
