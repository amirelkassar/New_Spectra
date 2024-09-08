using FluentValidation;
using MediatR;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{


    public class UpdateSpecializationCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string SpecializationName { get; set; }
        public string Description { get; set; }
        public decimal ConsultationCost { get; set; }
    }

    public class UpdateSpecializationCommandHandler : IRequestHandler<UpdateSpecializationCommand, Unit>
    {
        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IValidator<UpdateSpecializationCommand> updateValidator;
        public UpdateSpecializationCommandHandler(ISpecializationsRepository specializationRepository, IValidator<UpdateSpecializationCommand> updateValidator)
        {
            _specializationRepository = specializationRepository;
            updateValidator = updateValidator;
        }

        public async Task<Unit> Handle(UpdateSpecializationCommand request, CancellationToken cancellationToken)
        {
            var Specializations = await _specializationRepository.GetByIdAsync(request.Id);
            if (Specializations == null)
            {
                throw new Exception("Patient not found");
            }
            var validationResult = await updateValidator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                throw new FluentValidation.ValidationException(validationResult.Errors);
            }
            Specializations.SpecializationName = request.SpecializationName;
            Specializations.Description = request.Description;
            Specializations.ConsultationCost = request.ConsultationCost;


            await _specializationRepository.UpdateAsync(Specializations);
            return Unit.Value;
        }
    }
}

