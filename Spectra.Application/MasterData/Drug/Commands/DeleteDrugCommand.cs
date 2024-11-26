using MediatR;
using Spectra.Application.Interfaces;
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
        private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository;
        private readonly IDocumentHellper _addPhoto;

        public DeleteDrugCommandHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository, IDocumentHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteDrugCommand request, CancellationToken cancellationToken)
        {

            var drug = await _drugRepository.GetByIdAsync(request.Id);


            await _addPhoto.DeleteAttachment(drug.ImagePath);

            await _drugRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }

}
