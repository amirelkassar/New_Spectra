using Spectra.Application.Contracts.DTO;

namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class AdminContractAcceptModel : ContractAcceptModel
    {
        public AdminContractAcceptModel()
        {
            TextSections = [];
        }
        public ICollection<ContractTextSectionCreateDto> TextSections { get; set; }
    }
}
