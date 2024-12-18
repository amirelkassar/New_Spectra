namespace Spectra.Application.Hellper
{
    public class PaginatedResult<T>
    {
        public PaginatedResult(IEnumerable<T> items, long total, int pageSize)
        {
            Items = items;
            TotalCount = total;
            PageSize = pageSize;
            PageNumber = (int)Math.Ceiling((double)TotalCount / PageSize);
        }
        public IEnumerable<T> Items { get; private set; }
        public long TotalCount { get; private set; }
        public int PageNumber { get; private set; }
        public int PageSize { get; private set; }
        public bool UnReadNotifications { get; set; }
    }
}
