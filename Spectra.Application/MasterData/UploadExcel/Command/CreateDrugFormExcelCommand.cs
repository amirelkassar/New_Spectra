using MediatR;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateDrugFormExcelCommand
    {


        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateDrugCommand>, OperationResult<Unit>>
        {
            private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository;




            public CreateBulkDataCommandHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository, IWebHostEnvironment webHostEnvironment)
            {
                _drugRepository = drugRepository;

            }



            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateDrugCommand> request, CancellationToken cancellationToken)
            {

                foreach (var item in request.Data)
                {
                    var drug = Domain.MasterData.Drug.Drug.Create(
                    Ulid.NewUlid().ToString(),
                    item.Name,
                    item.ActiveIngredient);

                    drug.ScientificName = item.ScientificName;
                    drug.RecommendedDosage = item.RecommendedDosage;
                    drug.Doncentration = item.Doncentration;
                    drug.InteractionsWithOtherdrugs = item.InteractionsWithOtherdrugs;
                    drug.Contraindications = item.Contraindications;
                    drug.Code = item.Code;
                    drug.Type = item.Type;
                    drug.Nots = item.Nots;

                    await _drugRepository.AddAsync(drug);
                }
                return OperationResult<Unit>.Success(Unit.Value);



            }
        }

    }
}