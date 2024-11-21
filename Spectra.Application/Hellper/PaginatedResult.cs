namespace Spectra.Application.Hellper
{
    public class PaginatedResult<T>
    {
        public IEnumerable<T> Items { get; set; }
        public long TotalCount { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
