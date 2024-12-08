using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common.SnomedDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Services.SnomedServices
{
    internal class SnomedService(IHttpClientFactory httpClientFactory) : ISnomedService
    {
        private readonly HttpClient _httpClient = httpClientFactory.CreateClient(nameof(ISnomedService));

        public async Task<IEnumerable<SnomedReadDto>> GetAll(string search)
        {
            try
            {
                var add = _httpClient.BaseAddress;
                var response = await _httpClient.GetAsync($"browser/MAIN/SNOMEDCT-AU/2024-12-2/descriptions?limit=100&term={search}%20delay&active=true&conceptActive=true&lang=english&groupByConcept=true");
                if (!response.IsSuccessStatusCode)
                {
                    return [];
                }

                var data = await response.Content.ReadFromJsonAsync<SnomedApiResultDto>();

                return data.Items.Select(i => new SnomedReadDto
                {
                    Name = i.Term,
                    Code = i.Id
                }).ToArray();
            }
            catch (Exception)
            {

                throw;
            }
           
        }
    }
}
