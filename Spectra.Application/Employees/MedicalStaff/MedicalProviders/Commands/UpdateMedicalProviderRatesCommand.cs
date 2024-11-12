using MediatR;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{


    public class UpdateMedicalProviderRatesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public EmpelyeeRates empelyeeRate { get; set; }
    }

    public class UpdateDoctorRatesCommandHandler : IRequestHandler<UpdateMedicalProviderRatesCommand, OperationResult<Unit>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;

        private readonly IHellper _addFile;

        public UpdateDoctorRatesCommandHandler(IMedicalProviderRepository medicalProvider, IHellper addFile)
        {
            _medicalProvider = medicalProvider;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateMedicalProviderRatesCommand request, CancellationToken cancellationToken)
        {

            var Employee = await _medicalProvider.GetByIdAsync(request.Id);

            Employee.EmpelyeeRate = request.empelyeeRate;

            await _medicalProvider.UpdateAsync(Employee);

            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
