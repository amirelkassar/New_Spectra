using Spectra.Domain.Shared.Common.SnomedDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces
{
    public interface ISnomedService
    {
        Task<IEnumerable<SnomedReadDto>> GetAll(string search);
    }
}
