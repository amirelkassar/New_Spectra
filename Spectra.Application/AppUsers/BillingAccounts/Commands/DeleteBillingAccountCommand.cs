using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.UserBilling;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.BillingAccounts.Commands
{
    public class DeleteBillingAccountCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class DeleteBillingAccountCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<UserBillingAccount> accountRepository) : IRequestHandler<DeleteBillingAccountCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserBillingAccount> _accountRepository = accountRepository;
            public async Task<OperationResult> Handle(DeleteBillingAccountCommand request, CancellationToken cancellationToken)
            {
                var account = await _accountRepository.GetAsync(a => a.Id == request.Id && a.UserId == _currentUser.Id) ?? throw new NotFoundException("BillingAccounts", request.Id);

                await _accountRepository.DeleteAsync(account.Id);

                if(account.Default)
                {
                    var accounts = await _accountRepository.GetAllAsync(a => a.UserId == _currentUser.Id && a.Id != account.Id);
                    if (accounts.data is not null && accounts.data.Any())
                    {
                        var nextDefaultAccount = accounts.data.FirstOrDefault();
                        nextDefaultAccount.Default = true;
                        await _accountRepository.UpdateAsync(nextDefaultAccount);
                    }
                }

                return OperationResult.Success();
            }
        }
    }
}
