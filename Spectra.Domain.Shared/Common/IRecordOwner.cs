using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common
{
    public interface  IRecordOwner<TEntity, TKey> where TEntity : BaseEntity<TKey>
    {
        public string Owner { get; set; }
        public void ShareWith(string user, params RecordAccessLevel[] accessLevels);
        public void ShareWith(IDictionary<string, RecordAccessLevel[]> usersAccess);
    }
}
