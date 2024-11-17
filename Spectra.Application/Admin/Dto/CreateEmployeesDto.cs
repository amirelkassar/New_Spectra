using Microsoft.AspNetCore.Http;

namespace Spectra.Application.Admin.Dto
{
    public class CreateEmployeesDto : BassEmployeesDto
    {


        public List<IFormFile>? ScientificDegree { get; set; }



    }
}
