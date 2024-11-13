using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class UpdateMedicalProviderCommand : ICommand<OperationResult<Unit>>
    {

        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddresse { get; set; }
        public Address Address { get; set; }
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile>? ScientificDegree { get; set; }
      
    }

    public class UpdatemedicalProviderCommandHandler : IRequestHandler<UpdateMedicalProviderCommand, OperationResult<Unit>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;

        private readonly IHellper _addFile;

        public UpdatemedicalProviderCommandHandler(IMedicalProviderRepository medicalProvider, IHellper addFile)
        {
            _medicalProvider = medicalProvider;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateMedicalProviderCommand request, CancellationToken cancellationToken)
        {

            var medicalProvider = await _medicalProvider.GetByIdAsync(request.Id);
            if (JobTypes.Doctor == medicalProvider.JobType)
            {

                medicalProvider.AttachmentPath = await _addFile.UpdateAttachments(medicalProvider.AttachmentPath, request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
            }
                if (JobTypes.Specialist == medicalProvider.JobType)
                {
                    medicalProvider.AttachmentPath = await _addFile.UpdateAttachments(medicalProvider.AttachmentPath, request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
                

                }

                if (medicalProvider.AttachmentPath == null)
                {

                    throw new RequestErrorException(" you must to Uplode  your ScientificDegrees ");
                }


                medicalProvider.Name = request.Name;
            medicalProvider.NationalId = request.NationalId;
            medicalProvider.MobileNumber = request.MobileNumber;
            medicalProvider.HumenGenders = request.HumenGenders;
            medicalProvider.EmailAddress = request.EmailAddresse;
            medicalProvider.Address = request.Address;
            medicalProvider.Diagnoses = request.Diagnoses;
            medicalProvider.LicenseNumber = request.LicenseNumber;
            medicalProvider.ApprovedBy = request.ApprovedBy;
            await _medicalProvider.UpdateAsync(medicalProvider);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
