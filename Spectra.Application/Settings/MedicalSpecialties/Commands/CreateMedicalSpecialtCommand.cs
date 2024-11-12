using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.MedicalSpecialties.Commands
{
    public class CreateMedicalSpecialtCommand : ICommand<OperationResult<string>>
    {
        public string SpecializationId { get; set; }
        public List<string> DorctorsIds { get; set; }

    }

    public class CreateMedicalSpecialtCommandHandler : IRequestHandler<CreateMedicalSpecialtCommand, OperationResult<string>>
    {
        private readonly IMedicalSpecialtiesRepository _entityRepository;
     



        public CreateMedicalSpecialtCommandHandler(IMedicalSpecialtiesRepository entityRepository)
        {
            _entityRepository = entityRepository;
          
        }

        public async Task<OperationResult<string>> Handle(CreateMedicalSpecialtCommand request, CancellationToken cancellationToken)
        {

            var entity = MedicalSpecialt.Create(
                Ulid.NewUlid().ToString(),
               request.SpecializationId,
               request.DorctorsIds
              

                );
            await _entityRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }

}