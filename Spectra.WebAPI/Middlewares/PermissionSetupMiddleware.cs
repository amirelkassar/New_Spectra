using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Domain.Shared.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Middlewares
{
    public class PermissionSetupMiddleware
    {
        private readonly RequestDelegate _next;
        public PermissionSetupMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context,IPermissionManager permissionManager)
        {
            var permissionContributors = typeof(IPermissionContributor)
            .Assembly
            .GetTypes()
            .Where(type => typeof(IPermissionContributor).IsAssignableFrom(type) && type.IsClass)
            .ToArray();

            foreach (var permissionContributor in permissionContributors)
            {
                var groupAttr = permissionContributor.GetCustomAttribute<PermissionGroupNameAttribute>();
                var group = await permissionManager.CreatePermissoinGroup(groupAttr.EnName, groupAttr.ArName);
                foreach (var filed in permissionContributor.GetFields().Where(f=>f.GetCustomAttribute<PermissoinCategoryNameAttribute>() !=null).ToArray())
                {
                    var permissionFields = permissionContributor.GetFields().Where(f =>f.Name.Contains(filed.Name) && f.GetCustomAttribute<PermissoinNameAttribute>() != null).ToArray();
                }
            }
            await _next(context);
        }
    }
}
