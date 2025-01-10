using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.DomainEvents;
using Spectra.Domain.AppUser.UserWallet;

namespace Spectra.Application.AppUsers.EventHandlers
{
    internal class CreateWalletOnCreateUserEventHandler(IBaseMongoDbRepository<UserWallet> walletRepository) : INotificationHandler<OnNewUserRegisterEvent>
    {
        private readonly IBaseMongoDbRepository<UserWallet> _walletRepository = walletRepository;

        public async Task Handle(OnNewUserRegisterEvent notification, CancellationToken cancellationToken)
        {
            var wallet = new UserWallet(Ulid.NewUlid().ToString(), notification.UserId);

            await _walletRepository.AddAsync(wallet);
        }
    }
}
