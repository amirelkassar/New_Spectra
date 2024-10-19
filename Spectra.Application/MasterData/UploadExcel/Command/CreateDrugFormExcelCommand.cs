<<<<<<< HEAD
﻿using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;

=======
﻿using MediatR;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;


>>>>>>> Admin-BackEnd
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
<<<<<<< HEAD
               item.Code
=======
               item.Code,
               item.Nots
               ,
               item.Type
>>>>>>> Admin-BackEnd
               );



                    await _drugRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);

            
        
    }
        }

    }
}