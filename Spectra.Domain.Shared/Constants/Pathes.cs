using System.IO;

namespace Spectra.Domain.Shared.Constants
{
    public static class Pathes
    {
        private const string _base = "Documents";
        public static string GetEmployeesPath() => Path.Combine(_base, "Employees");
        public static string GetSystemFilesPath() => Path.Combine(_base, "SystemFiles");
        public static string GetImagesPath() => Path.Combine(GetSystemFilesPath(), "Imgs");
        public static string GetClientsPath() => Path.Combine(_base, "Clients");
        public static string GetUsersPath() => Path.Combine(_base, "Users");
    }
}
