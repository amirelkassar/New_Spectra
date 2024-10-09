using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class DeleteInternalExaminationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteInternalExaminationCommandHandler : IRequestHandler<DeleteInternalExaminationCommand, OperationResult<Unit>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public DeleteInternalExaminationCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteInternalExaminationCommand request, CancellationToken cancellationToken)
        {


            var internalExaminationRepository = await _InternalExaminationRepository.GetByIdAsync(request.Id);


            await _InternalExaminationRepository.DeleteAsync(internalExaminationRepository);
            return OperationResult<Unit>.Success(Unit.Value);
        }


    }
}


