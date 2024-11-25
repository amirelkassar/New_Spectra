using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.ServicesMD.Dtos
{
    public class ServiceListReadDto
    {
        public string Id { get; set; }
        public ServiceTypes ServiceType { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? Description { get; set; }
        public string? TermsAndConditions { get; set; }
    }
}
