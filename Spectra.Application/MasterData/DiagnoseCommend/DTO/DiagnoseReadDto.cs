using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.DTO
{
    public class DiagnoseReadDto
    {
        public string Id { get; set; }
        public string Code1 { get; set; }
        public string? Code2 { get; set; }
        public string? Code3 { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
    }
}
