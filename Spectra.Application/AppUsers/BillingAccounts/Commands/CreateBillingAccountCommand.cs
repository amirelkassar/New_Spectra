using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.UserBilling;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.BillingAccounts.Commands
{
    public class CreateBillingAccountCommand : IRequest<OperationResult>
    {
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public string Branch { get; set; }
        public string Country { get; set; }
        public string CountryCode { get; set; }
        public string City { get; set; }
        public bool Default { get; set; }

        public class CreateBillingAccountCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<UserBillingAccount> accountRepository) : IRequestHandler<CreateBillingAccountCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserBillingAccount> _accountRepository = accountRepository;

            public async Task<OperationResult> Handle(CreateBillingAccountCommand request, CancellationToken cancellationToken)
            {
                if (await _accountRepository.Exists(a => a.UserId == _currentUser.Id && a.AccountNumber.ToLower() == request.AccountNumber.ToLower()))
                    throw new AlreadyExistException("Billing Account", request.AccountNumber);

                var billingAccount = new UserBillingAccount(Ulid.NewUlid().ToString(),
                    _currentUser.Id,
                    request.BankName,
                    request.AccountNumber,
                    request.AccountHolderName,
                    request.Branch,
                    request.Country,
                    request.City)
                {
                    Default = request.Default,
                    CountryCode=request.CountryCode,
                };

                await _accountRepository.AddAsync(billingAccount);

                if (billingAccount.Default && await _accountRepository.Exists(a => a.UserId == _currentUser.Id && a.Id != billingAccount.Id))
                {
                    var accounts = await _accountRepository.GetAllAsync(a => a.UserId == _currentUser.Id && a.Id != billingAccount.Id);

                    foreach (var account in accounts.data)
                    {
                        account.Default = false;
                        await _accountRepository.UpdateAsync(account);
                    }
                }

                return OperationResult<string>.Success(billingAccount.Id);
            }
        }
    }
}
