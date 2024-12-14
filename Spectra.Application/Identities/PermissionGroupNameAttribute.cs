namespace Spectra.Application.Identities
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct)]
    public class PermissionGroupNameAttribute(string enName, string arName) : Attribute
    {
        public string EnName { get; } = enName;
        public string ArName { get; } = arName;
    }
}
