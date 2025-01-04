using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.InternalExaminations.Dtos
{
    public class InternalExaminatioReadDto : BaseEntityDto<string>
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
