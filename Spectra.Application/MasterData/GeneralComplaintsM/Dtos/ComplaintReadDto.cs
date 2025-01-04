using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Dtos
{
    public class ComplaintReadDto : BaseEntityDto<string>
    {
        public string Code1 { get; set; }
        public string ComplaintName { get; set; }
        public string DescriptionOfTheComplaint { get; set; }
    }
}
