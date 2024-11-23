using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Spectra.Application.Identities;
using Spectra.Application.Identities.ApiParams;
using Spectra.Application.Identities.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IPermissionManager _permission;
        private readonly int _expDays;
        private readonly string _key;
        private readonly byte[] _keyBytes;
        private readonly string _audience;
        private readonly string _issuer;
        private AppUser _user;
        private ICollection<string> _roles;

        public AuthenticationService(IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor,
        UserManager<AppUser> userManager,
        IPermissionManager permission)
        {
            _key = configuration["Jwt:Key"];
            _expDays = int.Parse(configuration["Jwt:ExpiryDays"]);
            _keyBytes = Encoding.ASCII.GetBytes(_key);
            _audience = configuration["Jwt:Audience"];
            _issuer = configuration["Jwt:Issuer"];
            _userManager = userManager;
            _permission = permission;
        }
        public async Task<OperationResult> LoginAsync(LoginAPIParam input)
        {
            var model = new LoginModel();
            var validationRes = await ValidateUserAsync(input);
            if (validationRes.SuccessOpration)
            {
                //preparing the singing credentials
                var signingcredentials = GenerateSigningCredentials();
                //preparing the overload
                var claims = await LoadClaims();
                //preparing the token
                DateTime lifetime;
                var token = GenerateToken(signingcredentials, claims, out lifetime);
                //preparing the model
                model.AccessToken = new JwtSecurityTokenHandler().WriteToken(token);
                model.ExpirationTime = lifetime;
                model.Roles = _roles;
                model.Permissions = await _permission.GetUserPermissionList(_user.Id);
                return OperationResult<LoginModel>.Success(model);
            }
            throw new UnauthorizedAccessException();
        }

        public Task<OperationResult> RefreshTokenAsync(string token)
        {
            throw new NotImplementedException();
        }

        public async Task<OperationResult> ValidateUserAsync(LoginAPIParam input)
        {
            if (input.UserEmail.Contains('@'))
                _user = await _userManager.FindByEmailAsync(input.UserEmail);
            else
                _user = await _userManager.FindByNameAsync(input.UserEmail);

            if (_user is null)
                return OperationResult.Failure(new Dictionary<string, string[]> { { "emailAddress", ["Invalid Emailaddress"] } });

            var checkPassword = await _userManager.CheckPasswordAsync(_user, input.Password);

            if (!checkPassword)
                return OperationResult.Failure(new Dictionary<string, string[]> { { "password", ["Invalid Password"] } });

            return OperationResult.Success();
        }

        private SigningCredentials GenerateSigningCredentials()
        {
            return new SigningCredentials(key: new SymmetricSecurityKey(_keyBytes),
            algorithm: SecurityAlgorithms.HmacSha256);
        }
        private async Task<ICollection<Claim>> LoadClaims()
        {
            //user data
            var userclaims = new List<Claim>
            {
                new(ClaimTypes.Name,_user.Name),
                new(ClaimTypes.Email,_user.Email),
                new(ClaimTypes.Sid,_user.Id),
                new(ClaimTypes.SerialNumber,_user.Id),
                new(CustomClaims.Surname,_user.SurName),
                new(CustomClaims.Aud,_audience),
                new(CustomClaims.Iss,_issuer),
            };
            //user roles
            _roles = await _userManager.GetRolesAsync(_user);
            foreach (var role in _roles)
            {
                userclaims.Add(new Claim(ClaimTypes.Role, role));
            }

            return userclaims;
        }
        private JwtSecurityToken GenerateToken(SigningCredentials credentials, ICollection<Claim> claims, out DateTime lifetime)
        {
            lifetime = DateTime.UtcNow.AddDays(_expDays);
            //preparing the token
            var token = new JwtSecurityToken(
                notBefore: DateTime.UtcNow,
                claims: claims,
                signingCredentials: credentials,
                expires: lifetime);
            return token;
        }
    }
}
