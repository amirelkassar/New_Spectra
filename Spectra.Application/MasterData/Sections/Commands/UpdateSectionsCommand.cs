using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Commands
{
    public class UpdateSectionsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<string> Diagnoses { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }



        public class UpdateSectionsCommandHandler : IRequestHandler<UpdateSectionsCommand, OperationResult<Unit>>
        {
            private readonly ISectionsRepository _sectionsRepository;




            public UpdateSectionsCommandHandler(ISectionsRepository sectionsRepository)
            {
                _sectionsRepository = sectionsRepository;

            }

            public async Task<OperationResult<Unit>> Handle(UpdateSectionsCommand request, CancellationToken cancellationToken)
            {
                var entity = await _sectionsRepository.GetByIdAsync(request.Id);


                entity.DoctorName = request.DoctorName;
                entity.Name = request.Name;
                entity.Diagnoses = request.Diagnoses;
                entity.DoctorId = request.DoctorId;


                await _sectionsRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
