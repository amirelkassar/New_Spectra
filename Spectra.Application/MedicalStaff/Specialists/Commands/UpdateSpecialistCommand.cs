using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.MedicalStaff.Specialists.Commands
{
    public class UpdateSpecialistCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddresse { get; set; }
        public Address Address { get; set; }
        public string Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile> ScientificDegree { get; set; }
    }

    public class UpdateSpecialistCommandHandler : IRequestHandler<UpdateSpecialistCommand, OperationResult<Unit>>
    {
        private readonly ISpecialistRepository _specialistRepository;
        private readonly IHellper _addFile;

        public UpdateSpecialistCommandHandler(ISpecialistRepository specialistRepository, IHellper addFile)
        {
            _specialistRepository = specialistRepository;

            _addFile = addFile;
        }
        public async Task<OperationResult<Unit>> Handle(UpdateSpecialistCommand request, CancellationToken cancellationToken)
        {

            var specialist = await _specialistRepository.GetByIdAsync(request.Id);


            specialist.Name = request.Name;
            specialist.NationalId = request.NationalId;
            specialist.MobileNumber = request.MobileNumber;
            specialist.HumenGenders = request.HumenGenders;
            specialist.EmailAddress = request.EmailAddresse;
            specialist.Address = request.Address;
            specialist.Diagnoses = request.Diagnoses;
            specialist.LicenseNumber = request.LicenseNumber;
            specialist.ApprovedBy = request.ApprovedBy;
            if (request.ScientificDegree != null)
            {
                specialist.AttachmentPath = await _addFile.UpdateAttachment(specialist.AttachmentPath, request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
            }
            await _specialistRepository.UpdateAsync(specialist);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
