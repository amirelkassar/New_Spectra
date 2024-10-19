using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

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
        public string EmployeeId { get; set; }
        public string Titel { get; set; }
        public ContractCases ContractCase { get; set; }

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


            contract.Freelancer = request.Freelancer;
            contract.SpectraTeam = request.SpectraTeam;
            contract.HoursOfWork = request.HoursOfWork;
            contract.DaysOfWork = request.DaysOfWork;
            contract.MinutesOfWork = request.MinutesOfWork;
            contract.EmployeeId = request.EmployeeId;
            contract.Titel = request.Titel;
            contract.ContractCase = request.ContractCase;

            if (request.ContractCase == ContractCases.SAVE)
            {
                await _contractRepository.UpdateAsync(contract);
                return OperationResult<Unit>.Success(Unit.Value);
            }

            var contracts = EmploymentContract.Create(
             Ulid.NewUlid().ToString(),
             request.Freelancer,
             request.SpectraTeam,
             request.HoursOfWork,
             request.DaysOfWork,
             request.MinutesOfWork,
             request.ContractCase,
             request.EmployeeId,
             request.Titel
             );

            await _contractRepository.AddAsync(contracts);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }

}
