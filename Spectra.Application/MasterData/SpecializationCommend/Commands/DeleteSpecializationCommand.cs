using MediatR;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.Patients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{

    public class DeleteSpecializationCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }

    public class DeleteSpecializationCommandHandler : IRequestHandler<DeleteSpecializationCommand, Unit>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public DeleteSpecializationCommandHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }


        public async Task<Unit> Handle(DeleteSpecializationCommand request, CancellationToken cancellationToken)
        {
            var Specialization = await _specializationRepository.GetByIdAsync(request.Id);
            if (Specialization == null)
            {
                throw new Exception("Specialization not found");
            }

            await _specializationRepository.DeleteAsync(Specialization);

            return Unit.Value;
        }
    }
}
