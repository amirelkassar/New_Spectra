using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{

    public class DeleteSpecializationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteSpecializationCommandHandler : IRequestHandler<DeleteSpecializationCommand, OperationResult<Unit>>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public DeleteSpecializationCommandHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }


        public async Task<OperationResult<Unit>> Handle(DeleteSpecializationCommand request, CancellationToken cancellationToken)
        {

            var Specialization = await _specializationRepository.GetByIdAsync(request.Id);
            if (Specialization == null)
            {
                throw new NotFoundException("Specializations", request.Id);
            }

            await _specializationRepository.DeleteAsync(Specialization);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }
}
