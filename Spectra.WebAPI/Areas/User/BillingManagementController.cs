using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.AppUsers.BillingAccounts.Commands;
using Spectra.Application.AppUsers.BillingAccounts.Queries;
using Spectra.Application.AppUsers.UserWallets.Queries;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.User
{
    public class BillingManagementController(ILogger<BillingManagementController> logger, ICurrentUser currentUser, ISender sender) : UserControllerBase<BillingManagementController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet]
        [Route("wallet")]
        public async Task<IActionResult> GetWalletAsync()
        {
            var response = await _sender.Send(new GetUserWalletQuery());

            return Ok(response);
        }

        [HttpGet]
        [Route("account")]
        public async Task<IActionResult> GetAccountAsync([FromQuery] GetBillingAccountByIdQuery input)
        {
            var response = await _sender.Send(input);

            return Ok(response);
        }

        [HttpGet]
        [Route("account-list")]
        public async Task<IActionResult> GetAccountListAsync([FromQuery] GetBillingAccountListQuery input)
        {
            var response = await _sender.Send(input);

            return Ok(response);
        }

        [HttpPost]
        [Route("account")]
        public async Task<IActionResult> CreateAccountAsync([FromBody] CreateBillingAccountCommand input)
        {
            var response = await _sender.Send(input);

            return Created("", response);
        }

        [HttpPut]
        [Route("account")]
        public async Task<IActionResult> UpdateAccountAsync([FromBody] UpdateBiilingAccountCommand input)
        {
            var response = await _sender.Send(input);

            return Accepted(response);
        }

        [HttpDelete]
        [Route("account")]
        public async Task<IActionResult> DeleteAccountAsync([FromQuery] DeleteBillingAccountCommand input)
        {
            var response = await _sender.Send(input);

            return NoContent();
        }
    }
}
