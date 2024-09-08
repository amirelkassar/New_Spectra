//using FluentValidation;
//using Spectra.Application.Clients.DTOs;
//using Spectra.Domain.ValueObjects;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Spectra.Application.Clients.Validator
//{

//    public class CreateOrganizationClientDtoValidator : AbstractValidator<CreateOrganizationClientDto>
//    {
//        public CreateOrganizationClientDtoValidator()
//        {
//            // Name validation (required)
//            RuleFor(org => org.Name)
//                .NotNull().WithMessage("Name is required.")
//                .SetValidator(new NameValidator());

//            // PhoneNumber validation (required)
//            RuleFor(org => org.PhoneNumber)
//                .NotNull().WithMessage("PhoneNumber is required.")
//                .SetValidator(new PhoneNumberValidator());

//            // Industry validation (required)
//            RuleFor(org => org.Industry)
//                .NotNull().WithMessage("Industry is required.")
//                .NotEmpty().WithMessage("Industry cannot be empty.");

//            // EmailAddress validation (required)
//            RuleFor(org => org.EmailAddress)
//                .NotNull().WithMessage("EmailAddress is required.")
//                .SetValidator(new EmailAddressValidator());

//            // Address validation (required)
//            RuleFor(org => org.Address)
//                .NotNull().WithMessage("Address is required.")
//                .SetValidator(new AddressValidator());

//            // OrganizationType validation (required)
//            RuleFor(org => org.OrganizationType)
//                .IsInEnum().WithMessage("Invalid Organization Type.");

           
//        }
//    }

    
//    }



