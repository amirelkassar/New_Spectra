using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.Packages.Dtos;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Packages.Commands
{
    public class CreatePackageCommand : IRequest<OperationResult>
    {
        public string ArName { get; set; }
        public string EnName { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public int? IconCode { get; set; }
        public ICollection<PackageServiceCreateDto> Services { get; set; }
        public ICollection<PackageGoalCreateDto> Goals { get; set; }
        public IFormFile? Image { get; set; }

        public class CreatePackageCommandHandler(IBaseMongoDbRepository<Package> packageRepository,
            IDocumentHellper documentHellper,
            IBaseMongoDbRepository<PlatformService> serviceRepository) : IRequestHandler<CreatePackageCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IDocumentHellper _documentHellper = documentHellper;
            private readonly IBaseMongoDbRepository<PlatformService> _serviceRepository = serviceRepository;

            public async Task<OperationResult> Handle(CreatePackageCommand request, CancellationToken cancellationToken)
            {
                if (await _packageRepository.Exists(p => p.ArName == request.ArName))
                {
                    throw new AlreadyExistException(request.ArName, nameof(request.ArName));
                }

                if (await _packageRepository.Exists(p => p.EnName.ToLower() == request.EnName.ToLower()))
                {
                    throw new AlreadyExistException(request.EnName, nameof(request.EnName));
                }
                var (services, totalServices) = await _serviceRepository.GetAllAsync(s => request.Services.Any(rs => rs.Id == s.Id));

                var packageServices=new List<PackageService>();

                foreach (var service in services) 
                {
                    var requestService = request.Services.First(s => s.Id == service.Id);
                    packageServices.Add(new PackageService
                    {
                        Id = service.Id,
                        ArName=service.ArName,
                        EnName=service.EnName,
                        Order=requestService.Order
                    });
                }
                var package = Package.Create(Ulid.NewUlid().ToString(),
                    request.ArName,
                    request.EnName,
                    request.Price,
                    packageServices);
                package.Discount = request.Discount;
                package.IconCode = request.IconCode;

                package.Goals = request.Goals.Select(g => new PackageGoal { ArName = g.ArName, EnName = g.EnName }).ToArray();

                if (request.Image is not null && request.Image.Length > 0)
                {
                    package.PhotoPath = await _documentHellper.CreateAttachment(request.Image, Pathes.GetPackagesPath());
                }

                await _packageRepository.AddAsync(package);

                return OperationResult<string>.Success(package.Id);
            }
        }
    }
}
