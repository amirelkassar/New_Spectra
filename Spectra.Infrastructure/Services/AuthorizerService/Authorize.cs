using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Services.AuthorizerService
{
    public class Authorize<TRequest> : IAuthorizer<TRequest>
    {
        public Authorize(){}
        public async Task<AuthorizationResult> AuthorizeAsync(TRequest instance, CancellationToken cancellation = default)
        {
           throw new NotImplementedException();
        }
    }
}
