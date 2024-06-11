using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Patients;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Repositories
{
	public class PatientRepository : IPatientRepository
	{
		private readonly IMongoCollection<Patient> _patients;

		public PatientRepository(IMongoDbService mongoDbService)
		{
			var database = mongoDbService.DataBase;
			_patients = database.GetCollection<Patient>("Patients");
		}

		public async Task AddAsync(Patient patient)
		{
			await _patients.InsertOneAsync(patient);
		}

		public async Task UpdateAsync(Patient patient)
		{
			await _patients.ReplaceOneAsync(p => p.Id == patient.Id, patient);
		}

		public async Task DeleteAsync(string id)
		{
			await _patients.DeleteOneAsync(p => p.Id == id);
		}

		public async Task<Patient> GetByIdAsync(string id)
		{
			return await _patients.Find(p => p.Id == id).FirstOrDefaultAsync();
		}

		public async Task<IEnumerable<Patient>> GetAllAsync()
		{
			return await _patients.Find(p => true).ToListAsync();
		}
	}
}
