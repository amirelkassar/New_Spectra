using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllCopiesWithDataDto
    {
        public string ContractId { get; set; }
        public string EmployeeId { get; set; }

        public DateTimeOffset Date { get; set; }
        public ContractCases ContractCase { get; set; }
        public AdminOrEmployee? AdminOrEmployee { get; set; }

    }
}
