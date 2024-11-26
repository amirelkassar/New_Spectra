namespace Spectra.WebAPI.Areas.Admin.Employees.Models
{
    public class DeleteAttachmentModel
    {
        public Guid FileId { get; set; }
        public string EmployeeId { get; set; }
    }
}
