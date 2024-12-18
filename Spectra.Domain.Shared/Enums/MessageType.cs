using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum MessageType : byte
    {
        Text = 1,
        Audio = 2,
        Video = 3,
        File = 4,
        Ads = 5
    }
}
