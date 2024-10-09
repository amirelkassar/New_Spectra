//using MediatR;
//using Spectra.Domain.Contracts;
//using Spectra.Domain.Shared.Common;
//using Spectra.Domain.Shared.Wrappers;

//namespace Spectra.Application.Admin.Queries
//{
//    public class GetAllContactrQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<EmploymentContract>>>
//    {

//    }

//    public class GGetAllContactrQueryHandler : IRequestHandler<GetAllContactrQuery, OperationResult<IEnumerable<EmploymentContract>>>
//    {
//        private readonly IContractRepository _contractRepository;

//        public GGetAllContactrQueryHandler(IContractRepository contractRepository)
//        {
//            _contractRepository = contractRepository;
//        }

//        public async Task<OperationResult<IEnumerable<EmploymentContract>>> Handle(GetAllContactrQuery request, CancellationToken cancellationToken)
//        {


//            var contract = await _contractRepository.GetAllAsync();

//            return OperationResult<IEnumerable<EmploymentContract>>.Success(contract);


//        }
//    }
//}
