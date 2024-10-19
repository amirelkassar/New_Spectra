using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.InternalExaminations;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.InternalExaminations
{
    public class InternalExaminationRepository : IInternalExaminationRepository

    {

        private readonly IMongoCollection<InternalExamination> _internalExamination;

        public InternalExaminationRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _internalExamination = database.GetCollection<InternalExamination>("InternalExaminations");
        }
        public async Task<InternalExamination> GetByIdAsync(string id)
        {

            var entity = await _internalExamination.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("internalExamination", id);
            }

            return entity;
        }

        public async Task AddAsync(InternalExamination internalExamination)
        {
            await _internalExamination.InsertOneAsync(internalExamination);
        }

        public async Task UpdateAsync(InternalExamination internalExamination)
        {
            await _internalExamination.ReplaceOneAsync(c => c.Id == internalExamination.Id, internalExamination);
        }

        public async Task DeleteAsync(InternalExamination internalExamination)
        {
            await _internalExamination.DeleteOneAsync(c => c.Id == internalExamination.Id);
        }

        public async Task<IEnumerable<InternalExamination>> GetAllAsync(Expression<Func<InternalExamination, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _internalExamination.Find(filter, options).ToListAsync();
        }
    }
}

