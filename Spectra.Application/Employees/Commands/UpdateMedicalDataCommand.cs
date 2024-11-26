using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class UpdateMedicalDataCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationName { get; set; }
        public string SectionId { get; set; }
        public ICollection<EmployeeSpecialization> Specializations { get; set; }
        public ICollection<EmployeeService> Services { get; set; }

        public class UpdateMedicalDataCommandHandler(IBaseMongoDbRepository<Employee> medicalRepository,
            IBaseMongoDbRepository<Section> sectionRepository,
            IBaseMongoDbRepository<Specialization> specializationRepository) : IRequestHandler<UpdateMedicalDataCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _medicalRepository = medicalRepository;
            private readonly IBaseMongoDbRepository<Section> _sectionRepository = sectionRepository;
            private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;

            public async Task<OperationResult> Handle(UpdateMedicalDataCommand request, CancellationToken cancellationToken)
            {
                var medicalProvider = await _medicalRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Employees", request.Id);

                if (!medicalProvider.Equals(request.SectionId))
                {
                    var newSection = await _sectionRepository.GetByIdAsync(request.SectionId) ?? throw new NotFoundException("Sections", request.SectionId);
                    medicalProvider.SectionId = newSection.Id;
                }
                var (currentSpecializations, currentSpecializationsTotal) = await _specializationRepository
                    .GetAllAsync(s => s.Id == medicalProvider.MainSpecializationId || medicalProvider.Specializations.Select(cs => cs.Id).Any(cs => cs == s.Id));

                var (newSpecializations, newSpecializationsTotal) = await _specializationRepository
                    .GetAllAsync(s => s.Id == request.MainSpecializationId || request.Specializations.Select(cs => cs.Id).Any(cs => cs == s.Id));


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
                            Name = spec.Name
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

                medicalProvider.MainSpecializationId = request.MainSpecializationId;
                medicalProvider.MainSpecializationName = request.MainSpecializationName;

                await _medicalRepository.UpdateAsync(medicalProvider);

                return OperationResult.Success();
            }
        }
    }
}
