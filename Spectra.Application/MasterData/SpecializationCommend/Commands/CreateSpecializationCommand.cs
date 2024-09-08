using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Patients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.SpecializationCommend;
using FluentValidation;
using System.ComponentModel.DataAnnotations;
using Spectra.Domain.Shared.Common.Exceptions;



namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{


    public class CreateSpecializationCommand : ICommand<string>
    {

        public string SpecializationName { get; set; }
        public string Description { get; set; }
        public decimal ConsultationCost { get; set; }
    }

    public class CreateSpecializationCommandHandler : IRequestHandler<CreateSpecializationCommand, string>
    {
        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IValidator<CreateSpecializationCommand> _createValidator;
        public CreateSpecializationCommandHandler(IValidator<CreateSpecializationCommand> createValidator, ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
            _createValidator = createValidator;
        }

        public async Task<string> Handle(CreateSpecializationCommand request, CancellationToken cancellationToken)
        {
            var validationResult = await _createValidator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                throw new FluentValidation.ValidationException(validationResult.Errors);
            }
            var Specialization = Domain.MasterData.DoctorsSpecialization.Specializations.Create(Ulid.NewUlid().ToString(), request.Description,  request.SpecializationName,request.ConsultationCost);
            await _specializationRepository.AddAsync(Specialization);
            return Specialization.Id;
        }
    }
}
