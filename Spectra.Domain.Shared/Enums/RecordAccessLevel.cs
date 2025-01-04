namespace Spectra.Domain.Shared.Enums
{
    public enum RecordAccessLevel : byte
    {
        None = 0,
        Read = 1,
        Edit = 2,
        Share = 3,
        Delete = 4,
        Clone = 5,
        Assign = 6,
        Export = 7,
        Print = 8,
        Send = 9
    }
}
