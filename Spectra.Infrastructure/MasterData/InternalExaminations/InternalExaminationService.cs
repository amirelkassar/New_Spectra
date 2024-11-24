using MediatR;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Queries;
using Spectra.Application.MasterData.InternalExaminations.Services;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.InternalExaminations
{
    public class InternalExaminationService : IInternalExaminationService
    {
        private readonly IMediator _mediator;


        public InternalExaminationService(IMediator mediator)
        {

            _mediator = mediator;

        }

        public async Task<OperationResult> CreateInternalExamination(CreateInternalExaminationCommand input)
        {
            return await _mediator.Send(input);
        }


        public async Task<OperationResult> UpdateInternalExamination(UpdateInternalExaminationCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteInternalExamination(string id)
        {
            var command = new DeleteInternalExaminationCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetInternalExaminationById(string id)
        {
            var query = new GetInternalExaminationByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllInternalExamination(GetAllInternalExaminationQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

