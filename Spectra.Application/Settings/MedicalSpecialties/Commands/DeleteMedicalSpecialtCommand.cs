using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.MedicalSpecialties.Commands
{
    public class DeleteMedicalSpecialtCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteMedicalSpecialtCommandHandler : IRequestHandler<DeleteMedicalSpecialtCommand, OperationResult<Unit>>
    {
        private readonly IMedicalSpecialtiesRepository _entityRepository;




        public DeleteMedicalSpecialtCommandHandler(IMedicalSpecialtiesRepository entityRepository)
        {
            _entityRepository = entityRepository;

        }

        public async Task<OperationResult<Unit>> Handle(DeleteMedicalSpecialtCommand request, CancellationToken cancellationToken)
        {

            var entity = await _entityRepository.GetByIdAsync(request.Id);

            await _entityRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
