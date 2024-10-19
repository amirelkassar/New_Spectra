using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllClientsDto
    {
        public string Name { get; set; }
        public int NumberOfKids { get; set; }
        //public int lastActivation {  get; set; }
        public ClientTypes ClientType { get; set; }


    }
}
