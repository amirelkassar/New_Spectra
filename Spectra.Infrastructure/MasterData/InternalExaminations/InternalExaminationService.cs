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

        public async Task<OperationResult<string>> CreateInternalExamination(CreateInternalExaminationCommand input)
        {

            var command = new CreateInternalExaminationCommand
            {
                Name = input.Name,
                Code = input.Code,
                ExaminationTypes = input.ExaminationTypes
            };

            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdateInternalExamination(string id, UpdateInternalExaminationCommand input)
        {

            var command = new UpdateInternalExaminationCommand
            {

                Id = id,
                Name = input.Name,
                Code = input.Code,
                ExaminationTypes = input.ExaminationTypes

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteInternalExamination(string id)
        {
            var command = new DeleteInternalExaminationCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<InternalExamination>> GetInternalExaminationById(string id)
        {
            var query = new GetInternalExaminationByIdQuery { Id = id };

            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<InternalExamination>>> GetAllInternalExamination()
        {

            var query = new GetAllInternalExaminationQuery();

            return await _mediator.Send(query);

        }



    }
}

