using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Sections.Dto
{
    public class SectionDto: BassMasterDataDto
    {
       
        public int CountDiagnoses { get; set; }
        public string DoctorName { get; set; }
    }
}
