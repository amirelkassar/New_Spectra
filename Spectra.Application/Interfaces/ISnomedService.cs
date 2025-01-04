using Spectra.Domain.Shared.Common.SnomedDtos;

namespace Spectra.Application.Interfaces
{
    public interface ISnomedService
    {
        Task<IEnumerable<SnomedReadDto>> GetAll(string search);
    }
}
