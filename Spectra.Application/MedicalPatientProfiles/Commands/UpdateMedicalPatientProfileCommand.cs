//using MediatR;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Http;
//using Spectra.Application.MasterData.Drug;
//using Spectra.Application.MasterData.HellperFunc;
//using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
//using Spectra.Application.Messaging;
//using Spectra.Application.Patients;
//using Spectra.Domain.MasterData.ServicesMD;
//using Spectra.Domain.Shared.Common.Exceptions;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;

//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Spectra.Application.MedicalPatientProfiles.Commands
//{
//    public class UpdateMedicalPatientProfileCommand : ICommand<OperationResult<Unit>>
//    {
//        public string DoctorId { get; set; }
//        public string PatientId { get; set; }
//        public string PatientName { get; set; }
//        public string ClientId { get; set; }
//        public string ClientName { get; set; }
//        public string? DrugId { get; set; }
//        public string? ReportsId { get; set; }



//        public class UpdateMedicalPatientProfileCommandHandler : IRequestHandler<UpdateMedicalPatientProfileCommand, OperationResult<Unit>>
//        {
//            private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;




//            public UpdateMedicalPatientProfileCommandHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
//            {
//                _medicalPatientProfileRepository = medicalPatientProfileRepository;

//            }

//            public async Task<OperationResult<Unit>> Handle(UpdateMedicalPatientProfileCommand request, CancellationToken cancellationToken)
//            {
//                var entity = await _medicalPatientProfileRepository.GetByIdAsync(request.Id);

//                var names = await _medicalPatientProfileRepository.GetAllAsync(b => b. == request.Name && b.Id != request.Id);
//                if (names.Any())
//                {
//                    throw new DbErrorException(" this's Name is a ready exists");
//                }
//                entity.Name = request.Name;
//                entity.DefinitionServices = request.DefinitionServices;
//                entity.AvailableSrvices = request.AvailableSrvices;
//                entity.Price = request.Price;
//                entity.TermsAndConditions = request.TermsAndConditions;
//                //entity.Address = request.Address;
//                //entity.Content = request.Content;
//                entity.Secations = request.Secations;

//                if (request.Photo != null)
//                {

//                    entity.AttachmentPath = await _addPhoto.UpdateAttachment(entity.AttachmentPath, request.Photo, "Upload/Image/Services");

//                }

//                await _serviceMRepository.UpdateAsync(entity);
//                return OperationResult<Unit>.Success(Unit.Value);
            

//    }

//        }
//    }
//}
