using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.AppUsers.BillingAccounts.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.UserBilling;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.BillingAccounts.Queries
{
    public class GetBillingAccountByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetBillingAccountByIdQueryHandler(ICurrentUser currentUser, IBaseMongoDbRepository<UserBillingAccount> accountRepository) : IRequestHandler<GetBillingAccountByIdQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserBillingAccount> _accountRepository = accountRepository;
            public async Task<OperationResult> Handle(GetBillingAccountByIdQuery request, CancellationToken cancellationToken)
            {
                var account = await _accountRepository.GetAsync(a => a.Id == request.Id && a.UserId == _currentUser.Id) ?? throw new NotFoundException("BillingAccounts", request.Id);

                var accountDto = account.Adapt<BillingAccountReadDto>();

                return OperationResult<BillingAccountReadDto>.Success(accountDto);
            }
        }
    }
}
