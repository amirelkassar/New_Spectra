using MediatR;
using Spectra.Application.Settings.SuccessStorIes.Commands;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.SuccessStorIes
{
    public interface ISuccessStoryService
    {
        Task<OperationResult<string>> CreateSuccessStoryies(CreateSuccessStoryCommand input);
        Task<OperationResult<Unit>> DeleteSuccessStoryies(string id);
        Task<OperationResult<IEnumerable<SuccessStory>>> GetAllSuccessStoryies();
        Task<OperationResult<SuccessStory>> GetSuccessStoryiesMById(string id);
        Task<OperationResult<Unit>> UpdateSuccessStoryies(string id, UpdateSuccessStoryCommand input);
    }
}