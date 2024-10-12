﻿using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using FluentValidation;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class UpdateInternalExaminationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public string Code { get; set; }
        public MentalillnessAndTreatment ExaminationTypes { get; set; }


    }

    public class UpdateInternalExaminationCommandHandler : IRequestHandler<UpdateInternalExaminationCommand, OperationResult<Unit>>
    {

        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public UpdateInternalExaminationCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateInternalExaminationCommand request, CancellationToken cancellationToken)
        {
           
            var internalExamination = await _InternalExaminationRepository.GetByIdAsync(request.Id);
          

            internalExamination.Name = request.Name;
            internalExamination.Code = request.Code;
            internalExamination.ExaminationTypes = request.ExaminationTypes;

            await _InternalExaminationRepository.UpdateAsync(internalExamination);
            return OperationResult<Unit>.Success(Unit.Value);
       
}

    }
   
}
