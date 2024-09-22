using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Contracts.Commands 
{
    public class UpdateContractCommand : ICommand<OperationResult<Unit>>
    {
        public string id { get; set; }
        public List<OperationContrct>? Freelancer { get; set; }
        public List<OperationContrct>? SpectraTeam { get; set; }

        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public int MinutesOfWork { get; set; }

    }

    public class UpdateContractCommandHandler : IRequestHandler<UpdateContractCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;
        
        public UpdateContractCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
         
        }

        public async Task<OperationResult<Unit>> Handle(UpdateContractCommand request, CancellationToken cancellationToken)
        {

            var contract = await _contractRepository.GetByIdAsync(request.id);

            contract.Freelancer =request.Freelancer;

         contract.SpectraTeam= request.SpectraTeam;
            contract.HoursOfWork = request.HoursOfWork;
           contract.DaysOfWork = request.DaysOfWork;
            contract.MinutesOfWork = request.MinutesOfWork;

            await _contractRepository.UpdateAsync(contract);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
