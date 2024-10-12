using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
