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
                var medicalProvider = await GetMedicalProviderAsync(request.Id);
                await ValidateSpecializationsAsync(request.Specializations);
                await ValidateServicesAsync(request.Services);

                await UpdateSpecializationsAsync(medicalProvider, request.MainSpecializationId, request.Specializations);
                UpdateMainSpecialization(medicalProvider, request.MainSpecializationId);
                await UpdateMainSectionAsync(medicalProvider, request.MainSpecializationId);
                await UpdateServicesAsync(medicalProvider, request.Services);

                await _medicalRepository.UpdateAsync(medicalProvider);

                return OperationResult.Success();
            }


            private async Task<Employee> GetMedicalProviderAsync(string id)
            {
                return await _medicalRepository.GetByIdAsync(id)
                       ?? throw new NotFoundException("Employees", id);
            }

            private async Task ValidateSpecializationsAsync(ICollection<string>? specializations)
            {
                if (specializations == null || !specializations.Any()) return;

                var (allSpecializations, _) = await _specializationRepository.GetAllAsync();
                foreach (var spec in specializations)
                {
                    if (!allSpecializations.Any(s => s.Id == spec))
                    {
                        throw new NotFoundException("Specializations", spec);
                    }
                }
            }

            private async Task ValidateServicesAsync(ICollection<string>? services)
            {
                if (services == null || !services.Any()) return;

                var (allServices, _) = await _serviceRepository.GetAllAsync();
                foreach (var service in services)
                {
                    if (!allServices.Any(s => s.Id == service))
                    {
                        throw new NotFoundException("Services", service);
                    }
                }
            }

            private async Task UpdateSpecializationsAsync(Employee medicalProvider, string mainSpecializationId, ICollection<string>? specializations)
            {
                var (currentSpecializations, _) = await _specializationRepository
                    .GetAllAsync(s => s.Id == medicalProvider.MainSpecializationId ||
                                      medicalProvider.Specializations.Select(cs => cs.Id).Any(cs => cs == s.Id));

                var (newSpecializations, _) = await _specializationRepository
                    .GetAllAsync(s => s.Id == mainSpecializationId ||
                                      (specializations != null && specializations.Any(cs => cs == s.Id)));

                var specializationsToBeAdded = newSpecializations
                    .Where(ns => !currentSpecializations.Any(cs => cs.Id == ns.Id))
                    .ToArray();

                var specializationsToBeRemoved = currentSpecializations
                    .Where(cs => !newSpecializations.Any(ns => ns.Id == cs.Id))
                    .ToArray();

                await AddSpecializationsAsync(medicalProvider, specializationsToBeAdded);
                await RemoveSpecializationsAsync(medicalProvider, specializationsToBeRemoved);
            }

            private async Task AddSpecializationsAsync(Employee medicalProvider, Specialization[] specializationsToBeAdded)
            {
                foreach (var spec in specializationsToBeAdded)
                {
                    spec.DoctorCount++;
                    medicalProvider.Specializations.Add(new EmployeeSpecialization
                    {
                        Id = spec.Id,
                        EnName = spec.EnName,
                        ArName = spec.ArName
                    });
                    await _specializationRepository.UpdateAsync(spec);
                }
            }

            private async Task RemoveSpecializationsAsync(Employee medicalProvider, Specialization[] specializationsToBeRemoved)
            {
                foreach (var spec in specializationsToBeRemoved)
                {
                    spec.DoctorCount--;
                    var existSpec = medicalProvider.Specializations.First(s => s.Id == spec.Id);
                    medicalProvider.Specializations.Remove(existSpec);
                    await _specializationRepository.UpdateAsync(spec);
                }
            }

            private void UpdateMainSpecialization(Employee medicalProvider, string mainSpecializationId)
            {
                var newMainSpecialization = _specializationRepository.GetAllAsync()
                    .Result.Item1.First(m => m.Id == mainSpecializationId);

                medicalProvider.MainSpecializationId = mainSpecializationId;
                medicalProvider.MainSpecializationEnName = newMainSpecialization.EnName;
                medicalProvider.MainSpecializationArName = newMainSpecialization.ArName;
            }

            private async Task UpdateMainSectionAsync(Employee medicalProvider, string mainSpecializationId)
            {
                var newMainSpecialization = await _specializationRepository.GetAsync(s => s.Id == mainSpecializationId);
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
            }

            private async Task UpdateServicesAsync(Employee medicalProvider, ICollection<string>? services)
            {
                if (services == null || !services.Any()) return;

                var (allServices, _) = await _serviceRepository.GetAllAsync(s => services.Any(rs => rs == s.Id));
                medicalProvider.Services.Clear();
                allServices.ToList().ForEach(service => medicalProvider.Services.Add(new EmployeeService
                {
                    Id = service.Id,
                    EnName = service.EnName,
                    ArName = service.ArName
                }));
            }
        }
    }
}
