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
    public class UpdateBiilingAccountCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public string Branch { get; set; }
        public string Country { get; set; }
        public string CountryCode { get; set; }
        public string City { get; set; }
        public bool Default { get; set; }

        public class UpdateBiilingAccountCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<UserBillingAccount> accountRepository) : IRequestHandler<UpdateBiilingAccountCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserBillingAccount> _accountRepository = accountRepository;
            public async Task<OperationResult> Handle(UpdateBiilingAccountCommand request, CancellationToken cancellationToken)
            {
                var account = await _accountRepository.GetAsync(a => a.Id == request.Id && a.UserId == _currentUser.Id) ?? throw new NotFoundException("BillingAccounts", request.Id);

                account.BankName = request.BankName;
                account.AccountNumber = request.AccountNumber;
                account.Branch = request.Branch;
                account.AccountHolderName = request.AccountHolderName;
                account.Country = request.Country;
                account.City = request.City;
                account.CountryCode = request.CountryCode;
                account.Default = request.Default;

                await _accountRepository.UpdateAsync(account);

                if (account.Default && await _accountRepository.Exists(a => a.UserId == _currentUser.Id && a.Id != account.Id))
                {
                    var accounts = await _accountRepository.GetAllAsync(a => a.UserId == _currentUser.Id && a.Id != account.Id);

                    foreach (var acc in accounts.data)
                    {
                        acc.Default = false;
                        await _accountRepository.UpdateAsync(acc);
                    }
                }

                return OperationResult.Success();
            }
        }
    }
}
