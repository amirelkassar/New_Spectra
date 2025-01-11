using Mapster;
using MediatR;
using Spectra.Application.AppUsers.UserWallets.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser.UserWallet;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.UserWallets.Queries
{
    public class GetUserWalletQuery : IRequest<OperationResult>
    {
        public class GetUserWalletQueryHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<UserWallet> walletRepository) : IRequestHandler<GetUserWalletQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<UserWallet> _walletRepository = walletRepository;

            public async Task<OperationResult> Handle(GetUserWalletQuery request, CancellationToken cancellationToken)
            {
                var wallet = await _walletRepository.GetAsync(w => w.UserId == _currentUser.Id) ?? throw new NotFoundException("UserWallets", _currentUser.Id);

                return OperationResult<WalletReadDto>.Success(wallet.Adapt<WalletReadDto>());

            }
        }
    }
}
