using Microsoft.AspNetCore.Http;

namespace Spectra.Application.Admin.Dto
{
    public class CreateEmployeesDto : BassEmployeesDto
    {

        public string specializationId { get; set; }
        public List<IFormFile>? ScientificDegree { get; set; }



    }
}
