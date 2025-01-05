using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Employees.Dto;

namespace Spectra.Application.Templates.Models
{
    public class EmployeeContractTemplateModel
    {
        public string CompanyName { get; set; }
        public EmployeeByIdDto Employee { get; set; }
        public ContractReadDto Contract { get; set; }
    }
}
