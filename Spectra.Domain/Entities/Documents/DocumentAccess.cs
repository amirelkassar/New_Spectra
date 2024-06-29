using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.Documents
{
	public class DocumentAccess
	{
        public string UserId { get; set; }
        public string DocumentId { get; set; }
        public Document Document { get; set; }
    }
}
