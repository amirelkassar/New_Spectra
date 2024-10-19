﻿using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.MedicalStaff.Doctor;
using System.Linq.Expressions;

namespace Spectra.Application.MedicalStaff.Doctors
{
    public interface IDoctorRepository
    {
        Task AddAsync(Doctor doctor);
        Task DeleteAsync(Doctor doctor);
        Task<IEnumerable<Doctor>> GetAllAsync(Expression<Func<Doctor, bool>> filter = null, FindOptions options = null);
        Task<PaginatedResult<Doctor>> GetAllAsyncA(Expression<Func<Doctor, bool>> filter = null, FindOptions options = null, int pageNumber = 1, int pageSize = 10);
        Task<Doctor> GetByIdAsync(string id);
        Task UpdateAsync(Doctor doctor);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<Doctor> filter, UpdateDefinition<Doctor> update);
    }
}