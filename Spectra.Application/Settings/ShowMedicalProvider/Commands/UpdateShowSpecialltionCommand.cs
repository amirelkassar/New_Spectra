using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.ShowMedicalProvider.Commands
{
    public class UpdateShowSpecialltionCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string SpecializationId { get; set; }
        public List<string> DorctorsIds { get; set; }



        public class UpdateMedicalSpecialtCommandHandler : IRequestHandler<UpdateShowSpecialltionCommand, OperationResult<Unit>>
        {

            private readonly IShowSpecialltionRepository _entityRepository;
            public UpdateMedicalSpecialtCommandHandler(IShowSpecialltionRepository entityRepository)
            {
                _entityRepository = entityRepository;

            }
            public async Task<OperationResult<Unit>> Handle(UpdateShowSpecialltionCommand request, CancellationToken cancellationToken)
            {
                var entity = await _entityRepository.GetByIdAsync(request.Id);
                //entity.SpecializationId = request.SpecializationId;
                //entity.DorctorsIds = request.DorctorsIds;

                await _entityRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
