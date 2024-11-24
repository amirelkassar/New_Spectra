using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{
    public class GetAllSpecializationQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllSpecializationQueryHandler(IBaseMongoDbRepository<Specialization> specializationRepository) : IRequestHandler<GetAllSpecializationQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;

        public async Task<OperationResult> Handle(GetAllSpecializationQuery request, CancellationToken cancellationToken)
        {
            ICollection<Specialization> specializations = null;
            long totalData = 0;
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                request.Search = request.Search.ToLower();
                var (data, total) = await _specializationRepository.GetAllAsync(d => d.Name.ToLower().StartsWith(request.Search)
                || d.Code.ToLower().StartsWith(request.Search), null, request.SkipCount, request.MaxCount);

                specializations = data.ToArray();
                totalData = total;
            }
            else
            {
                var (data, total) = await _specializationRepository.GetAllAsync(null, null, request.SkipCount, request.MaxCount);
                specializations = data.ToArray();
                totalData = total;
            }
            var dtos = specializations.Adapt<IReadOnlyCollection<SpecializationReadDto>>();
            return OperationResult<PaginatedResult<SpecializationReadDto>>.Success(new PaginatedResult<SpecializationReadDto>(dtos,totalData,request.MaxCount));
        }
    }
}
