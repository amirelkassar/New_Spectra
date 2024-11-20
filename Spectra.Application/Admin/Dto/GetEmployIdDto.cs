using Spectra.Application.Contracts.DTO;

namespace Spectra.Application.Admin.Dto
{
    public class GetEmployIdDto : BassEmployeesDto
    {
        public string Id { get; set; }
        public List<string> Attachments { get; set; }
    }
}
