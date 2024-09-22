using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Spectra.Domain.MasterData.ServicesMD
{
    public class MasterDataServices : BaseAuditableEntity<string>
    {
        public AvailableSrvice AvailableSrvices { get; set; }
        public string Name { get; set; }
        public string DefinitionServices { get; set; }
        public double Price { get; set; }
        public string TermsAndConditions { get; set; }
        public string? Address { get; set; }
        public string? Content { get; set; }
        public List<Secation>? Secations { get; set; }
        public string? AttachmentPath { get; set; }

        protected MasterDataServices() { }
        private MasterDataServices(
        string id,
        string name,
        string definitionServices,
        AvailableSrvice availableServices,
        double servicePrice,
        string termsAndConditions,
        string? serviceAddress = null,
        string? content = null,
        List<Secation>? secations =null,
        string? attachmentPath = null
               ) : base(id)
        {
            Id = id;
            Name = name;
            DefinitionServices = definitionServices;
            AvailableSrvices = availableServices;
            Price = servicePrice;
            TermsAndConditions = termsAndConditions;
            Address = serviceAddress;
            Content = content;
            Secations = secations;
            AttachmentPath = attachmentPath;
        }
        public static MasterDataServices Create(string id,
        string servicesName,
        string definitionServices,
        AvailableSrvice availableServices,
        double servicePrice,
        string termsAndConditions,
        string? serviceAddress = null,
        string? content = null,
        List<Secation>? secations=null ,
        string? attachmentPath = null
       )

        {

     

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(servicesName, nameof(servicesName));
            ArgumentNullException.ThrowIfNull(availableServices, nameof(availableServices));
            ArgumentNullException.ThrowIfNull(servicePrice, nameof(servicePrice));
            ArgumentNullException.ThrowIfNull(definitionServices, nameof(definitionServices));
            ArgumentNullException.ThrowIfNull(termsAndConditions, nameof(termsAndConditions));

            var secationList = secations?.Select(x => new Secation
            {
                Sectiontitle = x.Sectiontitle,
                Sectiondescription = x.Sectiondescription
            }).ToList() ?? new List<Secation>();



            return new MasterDataServices(id, 
                servicesName, definitionServices, 
                availableServices, servicePrice,
                termsAndConditions, 
                serviceAddress, content, secationList, attachmentPath);

        }
    

    }
}
