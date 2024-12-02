using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class UpdateMedicalDataCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string MainSpecializationId { get; set; }
        public ICollection<string>? Specializations { get; set; }
        public ICollection<string>? Services { get; set; }
        public class UpdateMedicalDataCommandHandler(IBaseMongoDbRepository<Employee> medicalRepository,
            IBaseMongoDbRepository<Section> sectionRepository,
            IBaseMongoDbRepository<Specialization> specializationRepository,
            IBaseMongoDbRepository<PlatformService> serviceRepository) : IRequestHandler<UpdateMedicalDataCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _medicalRepository = medicalRepository;
            private readonly IBaseMongoDbRepository<Section> _sectionRepository = sectionRepository;
            private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;
            private readonly IBaseMongoDbRepository<PlatformService> _serviceRepository = serviceRepository;

            public async Task<OperationResult> Handle(UpdateMedicalDataCommand request, CancellationToken cancellationToken)
            {
                var medicalProvider = await _medicalRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Employees", request.Id);

                var (specializations, specTotal) = await _specializationRepository.GetAllAsync();

                foreach (var spec in request.Specializations)
                {
                    if (!specializations.Any(s => s.Id == spec))
                    {
                        throw new NotFoundException("Specializations", spec);
                    }
                }

                var (checkServices, checkServiceTotal) = await _serviceRepository.GetAllAsync();

                foreach (var service in request.Services)
                {
                    if (!checkServices.Any(s => s.Id == service))
                    {
                        throw new NotFoundException("Services", service);
                    }
                }

                #region Update Specializations
                var (currentSpecializations, currentSpecializationsTotal) = await _specializationRepository
                   .GetAllAsync(s => s.Id == medicalProvider.MainSpecializationId || medicalProvider.Specializations.Select(cs => cs.Id).Any(cs => cs == s.Id));

                var (newSpecializations, newSpecializationsTotal) = await _specializationRepository
                    .GetAllAsync(s => s.Id == request.MainSpecializationId || request.Specializations.Any(cs => cs == s.Id));


                var specializationsToBeAdded = newSpecializations.Where(ns => !currentSpecializations.Select(s => s.Id).Any(cs => cs == ns.Id)).ToArray();
                var specializationsToBeRemoved = currentSpecializations.Where(ns => !newSpecializations.Select(s => s.Id).Any(cs => cs == ns.Id)).ToArray();

                if (specializationsToBeAdded.Length > 0)
                {
                    Parallel.ForEach(specializationsToBeAdded, async spec =>
                    {
                        spec.DoctorCount++;
                        medicalProvider.Specializations.Add(new EmployeeSpecialization
                        {
                            Id = spec.Id,
                            EnName = spec.EnName,
                            ArName = spec.ArName
                        });
                        await _specializationRepository.UpdateAsync(spec);
                    });
                }

                if (specializationsToBeRemoved.Length > 0)
                {
                    Parallel.ForEach(specializationsToBeRemoved, async spec =>
                    {
                        spec.DoctorCount--;
                        var existSpec = medicalProvider.Specializations.First(s => s.Id == spec.Id);
                        medicalProvider.Specializations.Remove(existSpec);
                        await _specializationRepository.UpdateAsync(spec);
                    });
                }
                #endregion

                #region Update Main Specialization
                var newMainSpecialization = newSpecializations.First(m => m.Id == request.MainSpecializationId);
                medicalProvider.MainSpecializationId = request.MainSpecializationId;
                medicalProvider.MainSpecializationEnName = newMainSpecialization.EnName;
                medicalProvider.MainSpecializationArName = newMainSpecialization.ArName;
                #endregion

                #region Update Main Section
                var newSection = await _sectionRepository.GetAsync(s => s.Specsifications.Any(sp => sp.Id == newMainSpecialization.Id));
                if (newSection != null)
                {
                    medicalProvider.SectionId = newSection.Id;
                    medicalProvider.SectionEnName = newSection.EnName;
                    medicalProvider.SectionArEnName = newSection.ArName;
                }
                else
                {
                    medicalProvider.SectionId = null;
                    medicalProvider.SectionEnName = null;
                    medicalProvider.SectionArEnName = null;
                }
                #endregion

                #region Update Services
                var (services,totalServices) =await _serviceRepository.GetAllAsync(s => request.Services.Any(rs => rs == s.Id));
                medicalProvider.Services.Clear();
                services.ToList().ForEach(service => medicalProvider.Services.Add(new EmployeeService 
                {
                    Id = service.Id,
                    EnName = service.EnName,
                    ArName= service.ArName
                }));
                #endregion

                await _medicalRepository.UpdateAsync(medicalProvider);

                return OperationResult.Success();
            }
        }
    }
}
