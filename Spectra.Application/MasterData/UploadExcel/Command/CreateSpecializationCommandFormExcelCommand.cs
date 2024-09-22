using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateSpecializationCommandFormExcelCommand
    {


        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateSpecializationCommand>, OperationResult<Unit>>
        {


             private readonly ISpecializationsRepository _specializationRepository;

            public CreateBulkDataCommandHandler(IValidator<CreateSpecializationCommand> createValidator, ISpecializationsRepository specializationRepository)
            {

                _specializationRepository = specializationRepository;

            }


            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateSpecializationCommand> request, CancellationToken cancellationToken)
            {

              
                    foreach (var item in request.Data)
                    {

                        var entity = Specialization.Create(Ulid.NewUlid().ToString(), item.SpecializationName,0 , item.Code, item.Description , item.ConsultationCost

                   );
                      
                        await _specializationRepository.AddAsync(entity);

                    }
                    return OperationResult<Unit>.Success(Unit.Value);

                
               
            }
        }

    }
}