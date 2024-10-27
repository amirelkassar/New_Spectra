using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Contracts.Commands
{

    public class CreateContractCommand : ICommand<OperationResult<string>>
    {
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
      
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public string EmployeeId { get; set; }
        public string Titel { get; set; }
        public ContractCases ContractCase { get; set; }

    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateContractCommand, OperationResult<string>>
    {

        private readonly IContractRepository _contractRepository;
        //private readonly ISubContractRepository _subContractRepository;


        public CreateDoctorCommandHandler(IContractRepository contractRepository/*/* ISubContractRepository subContractRepository*/)
        {
            _contractRepository = contractRepository;
            //_subContractRepository = subContractRepository;
        }
        public async Task<OperationResult<string>> Handle(CreateContractCommand request, CancellationToken cancellationToken)
        {
            var contract = EmploymentContract.Create(
              Ulid.NewUlid().ToString(),
            request.Freelance,
            request.SpectraTeam,
            request.HoursOfWork,
            request.DaysOfWork,
            request.EmployeeId,
            request.Titel,
            request.ContractCase 
                );

            await _contractRepository.AddAsync(contract);

            return OperationResult<string>.Success(contract.Id);


        }
    }


}
