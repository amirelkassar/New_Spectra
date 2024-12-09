using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.EmployeeHead
{
    [Area("employee-head")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Authorize(Roles = $"{Roles.ServiceHead},{Roles.DepartmentHead}")]
    public abstract class EmployeeHeadControllerBase<TController>(ILogger<TController> logger, ICurrentUser currentUser) : SpectraControllerBase<TController>(logger, currentUser) where TController : EmployeeHeadControllerBase<TController>
    {
    }
}
