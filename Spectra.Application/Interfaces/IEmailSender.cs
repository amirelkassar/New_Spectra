using Spectra.Application.Commons.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces
{
    public interface IEmailSender
    {
        Task<bool> SendAsync(EmailMetadata input);
        Task SendRangeAsync(ICollection<EmailMetadata> input);
    }
}
