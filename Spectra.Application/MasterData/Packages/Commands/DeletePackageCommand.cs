using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Packages.Commands
{
    public class DeletePackageCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class DeletePackageCommandHandler(IBaseMongoDbRepository<Package> packageRepository,
            IDocumentHellper documentHellper) : IRequestHandler<DeletePackageCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(DeletePackageCommand request, CancellationToken cancellationToken)
            {
                var package = await _packageRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Packages", request.Id);

                await _packageRepository.DeleteAsync(request.Id);
                if (package.PhotoPath is not null)
                {
                    await _documentHellper.DeleteAttachment(package.PhotoPath);
                }

                return OperationResult.Success();
            }
        }
    }
}
