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
    public class UpdatePackageCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string ArName { get; set; }
        public string EnName { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public int? IconCode { get; set; }
        public ICollection<PackageServiceCreateDto> Services { get; set; }
        public ICollection<PackageGoalCreateDto> Goals { get; set; }
        public IFormFile? Image { get; set; }
        public ICollection<string> Tags { get; set; }

        public class UpdatePackageCommandHandler(IBaseMongoDbRepository<Package> packageRepository,
            IDocumentHellper documentHellper,
            IBaseMongoDbRepository<PlatformService> serviceRepository) : IRequestHandler<UpdatePackageCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IDocumentHellper _documentHellper = documentHellper;
            private readonly IBaseMongoDbRepository<PlatformService> _serviceRepository = serviceRepository;

            public async Task<OperationResult> Handle(UpdatePackageCommand request, CancellationToken cancellationToken)
            {
                var package = await _packageRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Packages", request.Id);

                if (await _packageRepository.Exists(p => p.ArName == request.ArName && p.Id != request.Id))
                {
                    throw new AlreadyExistException(request.ArName, nameof(request.ArName));
                }
                if (await _packageRepository.Exists(p => p.EnName.ToLower() == request.EnName.ToLower() && p.Id != request.Id))
                {
                    throw new AlreadyExistException(request.EnName, nameof(request.EnName));
                }

                var (services, totalServices) = await _serviceRepository.GetAllAsync(s => request.Services.Any(rs => rs.Id == s.Id));

                var packageServices = new List<PackageService>();

                foreach (var requestedService in request.Services)
                {
                    var mainService = services.First(s => s.Id == requestedService.Id);
                    packageServices.Add(new PackageService
                    {
                        Id = mainService.Id,
                        ArName = mainService.ArName,
                        EnName = mainService.EnName,
                        Order = requestedService.Order
                    });
                }

                package.EnName = request.EnName;
                package.ArName = request.ArName;
                package.Price = request.Price;
                package.Discount = request.Discount;
                package.IconCode = request.IconCode;
                package.Services = packageServices;
                package.Tags = request.Tags;
                package.Goals = request.Goals.Select(g => new PackageGoal { ArName = g.ArName, EnName = g.EnName }).ToArray();

                if (request.Image is not null && request.Image.Length > 0)
                {
                    var oldImagePath = package.PhotoPath;
                    package.PhotoPath = await _documentHellper.CreateAttachment(request.Image, Pathes.GetPackagesPath());
                    await _documentHellper.DeleteAttachment(oldImagePath);
                }

                await _packageRepository.UpdateAsync(package);

                return OperationResult.Success();
            }
        }
    }
}
