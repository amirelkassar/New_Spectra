using System.IO;

namespace Spectra.Domain.Shared.Constants
{
    public static class Pathes
    {
        private const string _base = "Documents";
        public static string GetEmployeesPath() => Path.Combine(_base, "Employees");
        public static string GetSystemFilesPath() => Path.Combine(_base, "SystemFiles");
        public static string GetSucessStoriesPath() => Path.Combine(GetSystemFilesPath(), "SucessStories");
        public static string GetPackagesPath() => Path.Combine(GetSystemFilesPath(), "Packages");
        public static string GetArticlesPath() => Path.Combine(GetSystemFilesPath(), "Articles");
        public static string GetAdsPath() => Path.Combine(GetSystemFilesPath(), "ADs");
        public static string GetDrugsPath() => Path.Combine(GetSystemFilesPath(), "Drugs");
        public static string GetImagesPath() => Path.Combine(GetSystemFilesPath(), "Imgs");
        public static string GetClientsPath() => Path.Combine(_base, "Clients");
        public static string GetUsersPath() => Path.Combine(_base, "Users");
    }
}
