using FluentValidation;
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
        public List<OperationContrct>? Freelancer { get; set; }
        public List<OperationContrct>? SpectraTeam { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public int MinutesOfWork { get; set; }
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
              request.Freelancer,
              request.SpectraTeam,
              request.HoursOfWork,
              request.DaysOfWork,
              request.MinutesOfWork,
              request.ContractCase,
              request.EmployeeId,
              request.Titel
              );

            await _contractRepository.AddAsync(contract);

            return OperationResult<string>.Success(contract.Id);


        }
    }
   

}
