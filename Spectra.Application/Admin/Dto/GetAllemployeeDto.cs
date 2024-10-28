using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllemployeeDto
    {

        public string Name { get; set; }
        public DateTimeOffset DateOfRequest { get; set; }
        public  ContractCases? ContractCase { get; set; }
        
    }
}
