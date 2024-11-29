using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Commands
{
    public class UpdateSectionsCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }

        public class UpdateSectionsCommandHandler(ISectionsRepository sectionsRepository) : IRequestHandler<UpdateSectionsCommand, OperationResult>
        {
            private readonly ISectionsRepository _sectionsRepository = sectionsRepository;

            public async Task<OperationResult> Handle(UpdateSectionsCommand request, CancellationToken cancellationToken)
            {
                var entites = await _sectionsRepository.GetAllAsync(b => b.EnName == request.EnName && b.Id != request.Id);
                if (entites is null)
                {
                    throw new AlreadyExistException(request.EnName, nameof(request.EnName));
                }
                var entity = await _sectionsRepository.GetByIdAsync(request.Id);
                if (entity is null)
                {
                    throw new NotFoundException("Sections", request.Id);
                }

                entity.EnName = request.EnName;
                entity.ArName = request.ArName;
                entity.HeadDoctorId = request.HeadDoctorId;
                entity.HeadDoctorName = request.HeadDoctorName;
                entity.Specsifications = request.Specsifications;

                await _sectionsRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
        public class UpdateSectionsCommandValidator : AbstractValidator<UpdateSectionsCommand>
        {
            public UpdateSectionsCommandValidator()
            {
                RuleFor(x => x.Id)
                .NotEmpty()
                .NotNull();

                RuleFor(x => x.EnName)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(2);

                RuleFor(x => x.ArName)
                    .NotEmpty()
                    .NotNull()
                    .MinimumLength(2);

                RuleFor(x => x.Specsifications)
                    .NotEmpty()
                    .NotNull()
                    .Must(s => s.Count > 0)
                    .WithMessage("Specsifications must be more than 0");

                RuleFor(x => x.HeadDoctorId)
                    .NotEmpty()
                    .NotNull();

                RuleFor(x => x.HeadDoctorName)
                    .NotEmpty()
                    .NotNull();
            }
        }
    }
}
