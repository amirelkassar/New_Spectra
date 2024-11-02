using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Contracts.Commands
{
    public class UpdateContractCommand : ICommand<OperationResult<Unit>>
    {
        public string id { get; set; }
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
        public double Discount { get; set; }
        public double Duration { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public string EmployeeId { get; set; }
        public string Titel { get; set; }
        public string FirstName { get; set; }
        public string LastName{ get; set; }
        public ContractCases ContractCase { get; set; }
        public bool IsFreelance { get; set; }
        public bool IsSpectraTeam { get; set; }

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

            var CheckEmployee = await _contractRepository.GetAllAsync(x => x.EmployeeId == request.EmployeeId && x.ContractCase == ContractCases.REFUSE, null);
            if (CheckEmployee.Any())
            {
                throw new RequestErrorException(" the Admin Refuse Your Requst ");
            }


            var fullName = new Name()
            {
                FirstName = request.FirstName,
                LastName = request.LastName
            };


            var contract = await _contractRepository.GetByIdAsync(request.id);

            contract.ContractCase = request.ContractCase;
            contract.PlatformFee = request.Discount;
            contract.HoursOfWork = request.HoursOfWork;
            contract.DaysOfWork = request.DaysOfWork;
            contract.EmployeeId = request.EmployeeId;
            contract.Titel = request.Titel;
            contract.ContractCase = request.ContractCase;
            contract.Freelance = request.Freelance;
            contract.IsFreelance= request.IsFreelance;
            contract.IsSpectraTeam= request.IsSpectraTeam;


            if (request.ContractCase == ContractCases.SAVE)
            {
                await _contractRepository.UpdateAsync(contract);
                return OperationResult<Unit>.Success(Unit.Value);
            }

            var contracts = EmploymentContract.Create(
       
              Ulid.NewUlid().ToString(),
              request.Freelance,
              request.SpectraTeam,
              request.HoursOfWork,
              request.DaysOfWork,
              request.EmployeeId,
              request.Titel,
              request.ContractCase,
              fullName,
              request.IsFreelance,
              request.IsSpectraTeam
             );

            await _contractRepository.AddAsync(contracts);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }

}
