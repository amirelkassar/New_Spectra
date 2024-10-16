using MediatR;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateDrugFormExcelCommand
    {
      

        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateDrugCommand>, OperationResult<Unit>>
        {
            private readonly IDrugRepository _drugRepository;
        



            public CreateBulkDataCommandHandler(IDrugRepository drugRepository, IWebHostEnvironment webHostEnvironment)
            {
                _drugRepository = drugRepository;
          
            }



            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateDrugCommand> request, CancellationToken cancellationToken)
            {
             
                foreach (var item in request.Data)
                {
                    var entity = DrugMD.Create(

               Ulid.NewUlid().ToString(),
               item.Name,
               item.ActiveIngredient,
               item.ScientificName,
               item.RecommendedDosage,
               item.Doncentration,
               item.DrugInteractionsWithOtherdrugs,
               item.Contraindications,
               null,
               item.Code,
               item.Nots
               ,
               item.Type
               );



                    await _drugRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);

            
        
    }
        }

    }
}