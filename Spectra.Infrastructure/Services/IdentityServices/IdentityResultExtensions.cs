using Microsoft.AspNetCore.Identity;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    public static class IdentityResultExtensions
    {
        public static OperationResult ToApplicationResult(this IdentityResult result)
        {
            return result.Succeeded
                ? OperationResult.Success()
                : OperationResult.Failure(result.Errors.Select(e => new KeyValuePair<string, string[]>(e.Code, [e.Description])).ToDictionary());
        }
    }
}
