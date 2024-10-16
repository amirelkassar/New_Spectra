using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


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

            await _addPhoto.DeleteAttachments(entity.AttachmentPath);

            await _serviceMRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
