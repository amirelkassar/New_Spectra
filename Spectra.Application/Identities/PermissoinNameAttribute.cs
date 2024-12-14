namespace Spectra.Application.Identities
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
    public class PermissoinNameAttribute(string enName, string arName, string logicalName) : Attribute
    {
        public string EnName { get; } = enName;
        public string ArName { get; } = arName;
        public string LogicalName { get; } = logicalName;
    }
}
