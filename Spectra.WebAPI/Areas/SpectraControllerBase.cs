using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas
{
    public abstract class SpectraControllerBase<TController>(ILogger<TController> logger,
        ICurrentUser currentUser) : ControllerBase where TController : SpectraControllerBase<TController>
    {
        public ILogger<TController> Logger { get; } = logger;
        public ICurrentUser CurrentUser { get; } = currentUser;
    }
}
