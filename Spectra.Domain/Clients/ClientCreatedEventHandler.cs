using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Domain.Clients
{
    public class ClientCreatedEventHandler : INotificationHandler<ClientCreatedEvent>
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public ClientCreatedEventHandler(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task Handle(ClientCreatedEvent notification, CancellationToken cancellationToken)
        {
            var client = notification.Client;
            // Use a default password
            var defaultPassword = "DefaultSecurePassword";
            // Create a new IdentityUser
            var user = new IdentityUser
            {
                UserName = client.EmailAddress.Emailaddress,
                Email = client.EmailAddress.Emailaddress,
                Id = client.UserId

            };

            // Set the password using Identity Framework
            var result = await _userManager.CreateAsync(user, defaultPassword);

            if (!result.Succeeded)
            {
                // Handle failure (e.g., throw an exception, log the error, etc.)
                throw new Exception("Failed to create the user.");
            }
            // Assign the "ClientRole" to the user
            var roleResult = await _userManager.AddToRoleAsync(user, "ClientRole");

            if (!roleResult.Succeeded)
            {
                throw new Exception("Failed to assign role to the user.");
            }
            // Optionally, force the user to change the password on first login
            user.EmailConfirmed = false;
            await _userManager.UpdateAsync(user);
        }
    }
}
