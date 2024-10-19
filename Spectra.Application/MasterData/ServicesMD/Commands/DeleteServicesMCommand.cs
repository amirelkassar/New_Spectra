using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;
<<<<<<< HEAD
using Spectra.Infrastructure.MasterData.ServicesMD;
=======

>>>>>>> Admin-BackEnd

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class DeleteServicesMCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteDrugCommandHandler : IRequestHandler<DeleteServicesMCommand, OperationResult<Unit>>
    {
        private readonly IServiceMDRepository _serviceMRepository;
        private readonly IHellper _addPhoto;

        public DeleteDrugCommandHandler(IServiceMDRepository serviceMRepository, IHellper addPhoto)
        {
            _serviceMRepository = serviceMRepository;

            _addPhoto = addPhoto;

        }

        public async Task<OperationResult<Unit>> Handle(DeleteServicesMCommand request, CancellationToken cancellationToken)
        {

            var entity = await _serviceMRepository.GetByIdAsync(request.Id);

<<<<<<< HEAD
            await _addPhoto.Deleteattachment(entity.AttachmentPath);
=======
            await _addPhoto.DeleteAttachments(entity.AttachmentPath);
>>>>>>> Admin-BackEnd

            await _serviceMRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
