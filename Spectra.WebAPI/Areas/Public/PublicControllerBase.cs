using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.Public
{
    [ApiController]
    [Area("public")]
    [Route("api/[area]/[controller]")]
    public abstract class PublicControllerBase<T> : SpectraControllerBase<T> where T : PublicControllerBase<T>
    {
        protected PublicControllerBase(ILogger<T> logger, ICurrentUser currentUser) : base(logger, currentUser)
        {
        }
    }
}
