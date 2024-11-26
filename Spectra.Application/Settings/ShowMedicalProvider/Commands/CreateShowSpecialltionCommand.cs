using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.ShowMedicalProvider.Commands
{
    public class CreateShowSpecialltionCommand : ICommand<OperationResult<string>>
    {
        public List<MedicalSpecialt> MedicalSpecialts { get; set; }

    }

    public class CreateMedicalSpecialtCommandHandler : IRequestHandler<CreateShowSpecialltionCommand, OperationResult<string>>
    {
        private readonly IShowSpecialltionRepository _entityRepository;




        public CreateMedicalSpecialtCommandHandler(IShowSpecialltionRepository entityRepository)
        {
            _entityRepository = entityRepository;

        }

        public async Task<OperationResult<string>> Handle(CreateShowSpecialltionCommand request, CancellationToken cancellationToken)
        {

            var entity = ShowSpecialltions.Create(
                Ulid.NewUlid().ToString(),
            request.MedicalSpecialts


                );
            await _entityRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }

}