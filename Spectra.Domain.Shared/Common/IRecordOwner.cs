using Spectra.Domain.Shared.Enums;
using System.Collections.Generic;

namespace Spectra.Domain.Shared.Common
{
    public interface IRecordOwner<TEntity, TKey> where TEntity : BaseEntity<TKey>
    {
        public string Owner { get; set; }
        public void ShareWith(string user, params RecordAccessLevel[] accessLevels);
        public void ShareWith(IDictionary<string, RecordAccessLevel[]> usersAccess);
    }
}
