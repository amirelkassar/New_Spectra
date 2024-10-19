using MediatR;

using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Commands
{
    public class CreateInternalExaminationCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }

        public string Code { get; set; }
        public MentalillnessAndTreatment ExaminationTypes { get; set; }


    }


<<<<<<< HEAD

=======
>>>>>>> Admin-BackEnd
    public class CreateInternalExaminationsCommandHandler : IRequestHandler<CreateInternalExaminationCommand, OperationResult<string>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public CreateInternalExaminationsCommandHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateInternalExaminationCommand request, CancellationToken cancellationToken)
        {
          
                var internalExamination =InternalExamination.Create(

                    Ulid.NewUlid().ToString(),
                    request.Name, request.Code, request.ExaminationTypes
                    );
                await _InternalExaminationRepository.AddAsync(internalExamination);
                return OperationResult<string>.Success(internalExamination.Id);

         
          
        }
    }
  
}