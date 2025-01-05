using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.Templates.Models;

namespace Spectra.Application.Templates.Service
{
    public interface ITemplateService
    {
        Task<byte[]> GetContractTemplateAsync(EmployeeContractTemplateModel model);
    }
}
