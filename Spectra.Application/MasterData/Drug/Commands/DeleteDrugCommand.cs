using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class DeleteDrugCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteDrugCommandHandler : IRequestHandler<DeleteDrugCommand, OperationResult<Unit>>
    {
        private readonly IDrugRepository _drugRepository;
        private readonly IHellper _addPhoto;

        public DeleteDrugCommandHandler(IDrugRepository drugRepository, IHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteDrugCommand request, CancellationToken cancellationToken)
        {

            var drugs = await _drugRepository.GetByIdAsync(request.Id);


            await _addPhoto.DeleteAttachments(drugs.AttachmentPath);

            await _drugRepository.DeleteAsync(drugs);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }

}
