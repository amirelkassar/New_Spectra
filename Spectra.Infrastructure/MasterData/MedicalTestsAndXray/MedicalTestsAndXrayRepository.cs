﻿using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.MedicalTestsAndXray
{
    public class MedicalTestsAndXrayRepository : IMedicalTestsAndXrayRepository
    {

        private readonly IMongoCollection<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray> _medicalTestsAndXrays;

        public MedicalTestsAndXrayRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _medicalTestsAndXrays = database.GetCollection<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>("MedicalTestsAndXrays");
        }
        public async Task<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray> GetByIdAsync(string id)
        {

            var entity = await _medicalTestsAndXrays.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Medical Tests And Xrays", id);
            }

            return entity;
        }

        public async Task AddAsync(Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.InsertOneAsync(medicalTestsAndXrays);
        }

        public async Task UpdateAsync(Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.ReplaceOneAsync(c => c.Id == medicalTestsAndXrays.Id, medicalTestsAndXrays);
        }

        public async Task DeleteAsync(Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.DeleteOneAsync(c => c.Id == medicalTestsAndXrays.Id);
        }

        public async Task<IEnumerable<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>> GetAllAsync()
        {

            return await _medicalTestsAndXrays.Find(p => true).ToListAsync();
        }
    }
}

