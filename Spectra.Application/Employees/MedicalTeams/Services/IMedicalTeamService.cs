using MediatR;
using Spectra.Application.Employees.MedicalTeams.Commands;
using Spectra.Application.Employees.MedicalTeams.Dto;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalTeams.Services
{
    public interface IMedicalTeamService
    {
        Task<OperationResult<string>> CreateMedicalTeam(CreateMedicalTeamCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTeam(string id);
        Task<OperationResult<IEnumerable<SpecialistDto>>> GetMedicalTeamById(string id);
        Task<OperationResult<Unit>> UpdateMedicalTeam(string id, UpdateMedicalTeamCommand input);
    }
}