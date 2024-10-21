using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Application.Messaging;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.MedicalStaff.Specialists.Commands
{


    public class CreateSpecialistCommand : ICommand<OperationResult<string>>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile> ScientificDegree { get; set; }
        public EmpelyeeRates? empelyeeRate { get; set; }


    }

    public class CreateSpecialistCommandHandler : IRequestHandler<CreateSpecialistCommand, OperationResult<string>>
    {
        private readonly ISpecialistRepository _specialistRepository;
        //private readonly ISpecializationsRepository _specializationRepository;
        private readonly IHellper _addFile;

        public CreateSpecialistCommandHandler(ISpecialistRepository specialistRepository, IHellper addFile  )
        {
            _specialistRepository = specialistRepository;
            
            _addFile = addFile;
        }
        public async Task<OperationResult<string>> Handle(CreateSpecialistCommand request, CancellationToken cancellationToken)
        {
            List<string>? filePath = null;
            var uploadfile = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
            if (uploadfile != null)
            {
                filePath = uploadfile;
            }

            var specialist = Specialist.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.EmailAddress,
                request.HumenGenders,
                request.Address,
                request.Diagnoses,
                request.LicenseNumber,
                request.ApprovedBy,
                request.Academicdegree,
                 filePath,
                request.empelyeeRate = 0
               );

            await _specialistRepository.AddAsync(specialist);
           


            return OperationResult<string>.Success(specialist.Id);


        }
    }


}
