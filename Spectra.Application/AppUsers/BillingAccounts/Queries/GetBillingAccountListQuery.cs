using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.AppUsers.BillingAccounts.Dtos;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.UserBilling;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.BillingAccounts.Queries
{
    public class GetBillingAccountListQuery : QueryPaginationParam,IRequest<OperationResult>
    {

        public class GetBillingAccountListQueryHandler(ICurrentUser currentUser, IBaseMongoDbRepository<UserBillingAccount> accountRepository) : IRequestHandler<GetBillingAccountListQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserBillingAccount> _accountRepository = accountRepository;
            public async Task<OperationResult> Handle(GetBillingAccountListQuery request, CancellationToken cancellationToken)
            {
                var accounts = await _accountRepository.GetAllAsync(a => a.UserId == _currentUser.Id,null,request.SkipCount,request.MaxCount);

                var dtos = accounts.data.Adapt<IReadOnlyCollection<BillingAccountListReadDto>>();

                return OperationResult<PaginatedResult<BillingAccountListReadDto>>.Success(new PaginatedResult<BillingAccountListReadDto>(dtos, accounts.total, request.MaxCount));
            }
        }
    }
}
