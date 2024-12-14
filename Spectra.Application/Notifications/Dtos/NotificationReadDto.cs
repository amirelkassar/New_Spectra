using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Notifications.Dtos
{
    public class NotificationReadDto : BaseEntityDto<string>
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string SenderId { get; set; }
        public NotificationTypes Type { get; set; }
        public string? ObjectUrl { get; set; }
        public NotificationChangeStatuses Status { get; set; }


        public static TypeAdapterConfig Configure() => TypeAdapterConfig<Notification, NotificationReadDto>
               .NewConfig()
               .Map(dest => dest.Status, src => src.Changes.FirstOrDefault().Status).Config;
    }
}
