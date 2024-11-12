using Spectra.Domain.StaticStringDatas;

namespace Spectra.Application.StaticStringDatas
{
    public interface IStaticStringDataRepository
    {
        //Task AddAsync(StaticText staticText);
        //Task DeleteAsync(string id);
        Task<IReadOnlyCollection<StaticText>> GetAllAsync();
        //Task<StaticText> GetByIdAsync(string id);
        //Task UpdateAsync(StaticText staticText);
    }
}