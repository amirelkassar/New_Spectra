using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Middlewares
{
    public static class MiddlewareExtension
    {
        public static WebApplication UsePermissionSetup(this WebApplication app)
        {
            app.UseMiddleware<PermissionSetupMiddleware>();
            return app;
        }
    }
}
