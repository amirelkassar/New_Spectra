using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Settings.Articles;
using Spectra.Application.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.ShowMedicalProvider.Commands
{
    public class DeleteShowSpecialltionCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalSpecialtCommandHandler : IRequestHandler<DeleteShowSpecialltionCommand, OperationResult<Unit>>
    {
        private readonly IShowSpecialltionRepository _entityRepository;




        public DeleteMedicalSpecialtCommandHandler(IShowSpecialltionRepository entityRepository)
        {
            _entityRepository = entityRepository;

        }

        public async Task<OperationResult<Unit>> Handle(DeleteShowSpecialltionCommand request, CancellationToken cancellationToken)
        {

            var entity = await _entityRepository.GetByIdAsync(request.Id);

            await _entityRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
