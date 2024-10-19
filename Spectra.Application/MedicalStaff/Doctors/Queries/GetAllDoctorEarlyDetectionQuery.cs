using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Doctors.Queries
{
    public class GetAllDoctorEarlyDetectionQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<Doctor>>>
    {

    }

    public class GetAllDoctorEarlyDetectionQueryHandler : IRequestHandler<GetAllDoctorEarlyDetectionQuery, OperationResult<IEnumerable<Doctor>>>
    {
        private readonly IContractRepository _contractRepository;
        private readonly IDoctorRepository _doctorRepository;

        public GetAllDoctorEarlyDetectionQueryHandler(IContractRepository contractRepository, IDoctorRepository doctorRepository)
        {
            _contractRepository = contractRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<OperationResult<IEnumerable<Doctor>>> Handle(GetAllDoctorEarlyDetectionQuery request, CancellationToken cancellationToken)
        {
            //here we will need to the Doctors From supContract that  but we put the contract untile make the admin to accpet the Doctor

            var doctorsWithContract =
    await _contractRepository.GetAllAsync(c =>
    c.Titel == "Doctor" &&
    c.ContractCase == ContractCases.ACTIVE &&
    (c.Freelancer.Any(f => f.Service == "EarlyExamination") ||
     c.SpectraTeam.Any(s => s.Service == "EarlyExamination")),
       new FindOptions()
   );

            var doctorIds = doctorsWithContract.Select(c => c.EmployeeId).ToList();

            // Fetch the doctor entities using the EmployeeId
            var doctors = await _doctorRepository.GetAllAsync(d => doctorIds.Contains(d.Id));

            // Optionally, if you want to project some custom output
            //var result = doctors.Select(d => new  {
            //    DoctorId = d.Id,
            //    DoctorName = d.Name.FirstName,
            //    d.Diagnoses,
            //    //ContractDetails = doctorsWithContract
            //        //.Where(c => c.EmployeeId == d.Id)
            //        //.Select(c => new {
            //        //    c.HoursOfWork,
            //        //    c.DaysOfWork,
            //        //    FreelancerContracts = c.Freelancer
            //        //        .Where(f => f.Service == "Early Examination")
            //        //        .Select(f => new { f.Service, f.Selary }),
            //        //    SpectraTeamContracts = c.SpectraTeam
            //        //        .Where(s => s.Service == "Early Examination")
            //        //        .Select(s => new { s.Service, s.Selary })
            //        //})
            //});


            return OperationResult<IEnumerable<Doctor>>.Success(doctors);


        }
    }
}
