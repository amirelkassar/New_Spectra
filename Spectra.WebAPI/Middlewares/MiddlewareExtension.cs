using Microsoft.AspNetCore.Builder;

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
