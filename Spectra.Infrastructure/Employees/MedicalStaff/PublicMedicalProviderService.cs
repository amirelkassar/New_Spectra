using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Employees.MedicalStaff
{
    internal class PublicMedicalProviderService(IMediator mediator) : IPublicMedicalProviderService
    {
        private readonly IMediator _mediator = mediator;

        public Task<OperationResult> CreateAsync(CreateMedicalProviderDto input)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> CreateAttachmentAsync(EmployeeAttachmentDto input)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> DeleteAttachmentAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> GetAsync(string id, string userId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> UpdateAttachmentAsync(Guid id, EmployeeAttachmentDto input)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> UpdatePersonalDataAsync(UpdateMedicalProviderDto input)
        {
            throw new NotImplementedException();
        }
    }
}
