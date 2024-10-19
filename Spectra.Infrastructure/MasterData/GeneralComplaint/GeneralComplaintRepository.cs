﻿using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Common.Exceptions;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.GeneralComplaint
{
    public class GeneralComplaintRepository : IGeneralComplaintRepository
    {
        private readonly IMongoCollection<Domain.MasterData.GeneralComplaints.GeneralComplaint> _GeneralComplaints;

        public GeneralComplaintRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _GeneralComplaints = database.GetCollection<Domain.MasterData.GeneralComplaints.GeneralComplaint>("GeneralComplaints");
        }
        public async Task<Domain.MasterData.GeneralComplaints.GeneralComplaint> GetByIdAsync(string id)
        {
            return await _GeneralComplaints.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint)
        {
            await _GeneralComplaints.InsertOneAsync(GeneralComplaint);
        }

        public async Task UpdateAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint)
        {
            await _GeneralComplaints.ReplaceOneAsync(c => c.Id == GeneralComplaint.Id, GeneralComplaint);
        }

        public async Task DeleteAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint)
        {
            await _GeneralComplaints.DeleteOneAsync(c => c.Id == GeneralComplaint.Id);
        }

        //public async Task<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetAllAsync()
        //{

        //    return await _GeneralComplaints.Find(p => true).ToListAsync();
        //}
        public async Task<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetAllAsync(Expression<Func<Domain.MasterData.GeneralComplaints.GeneralComplaint, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _GeneralComplaints.Find(filter, options).ToListAsync();
        }
    }
}