namespace Spectra.Domain.Shared.Common
{
    public class QueryPaginationParam
    {
        public int SkipCount { get; set; } = 0;
        private int _maxCount = 100;
        public int MaxCount
        {
            get => _maxCount;
            set => _maxCount = value > 100 ? _maxCount = 100 : value;
        }
    }
}
