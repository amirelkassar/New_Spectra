using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.MedicalSpecialties.Commands
{
    public class UpdateMedicalSpecialtCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string SpecializationId { get; set; }
        public List<string> DorctorsIds { get; set; }



        public class UpdateMedicalSpecialtCommandHandler : IRequestHandler<UpdateMedicalSpecialtCommand, OperationResult<Unit>>
        {

            private readonly IMedicalSpecialtiesRepository _entityRepository;
            public UpdateMedicalSpecialtCommandHandler(IMedicalSpecialtiesRepository entityRepository)
            {
                _entityRepository = entityRepository;

            }
            public async Task<OperationResult<Unit>> Handle(UpdateMedicalSpecialtCommand request, CancellationToken cancellationToken)
            {
                var entity = await _entityRepository.GetByIdAsync(request.Id);
                entity.SpecializationId = request.SpecializationId;
                entity.DorctorsIds = request.DorctorsIds;

                await _entityRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
