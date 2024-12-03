using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common.SnomedDtos
{
    public class SnomedApiResultDto
    {
        public bool First { get; set; }
        public bool Last { get; set; }
        public ICollection<SnomedApiResulItemDataDto> Items { get; set; }
    }

    public class SnomedApiResulItemDataDto
    {
        public string Term { get; set; }
        public string Id { get; set; }
    }
}
