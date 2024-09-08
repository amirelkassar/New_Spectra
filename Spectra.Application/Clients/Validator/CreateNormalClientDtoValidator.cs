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
//    public class CreateNormalClientDtoValidator : AbstractValidator<CreateNormalClientDto>
//    {
//        public CreateNormalClientDtoValidator()
//        {
//            RuleFor(x => x.Name)
//                .NotNull().WithMessage("Name is required.")
//                .SetValidator(new NameValidator());

//            RuleFor(x => x.NationalId)
//                .NotEmpty().WithMessage("National ID is required.");

//            RuleFor(x => x.PhoneNumber)
//                .NotNull().WithMessage("Phone number is required.")
//                .SetValidator(new PhoneNumberValidator());

//            RuleFor(x => x.ClientType)
//                .IsInEnum().WithMessage("Client type is invalid.");

//            RuleFor(x => x.UserId)
//                .NotEmpty().WithMessage("User ID is required.");

//            RuleFor(x => x.EmailAddress)
//                .NotNull().WithMessage("Email address is required.")
//                .SetValidator(new EmailAddressValidator());

//            RuleFor(x => x.Address)
//                .NotNull().WithMessage("Address is required.")
//                .SetValidator(new AddressValidator());
//        }
//    }

//    public class NameValidator : AbstractValidator<Name>
//    {
//        public NameValidator()
//        {
//            RuleFor(x => x.FirstName)
//                .NotEmpty().WithMessage("First name is required.");

//            // LastName and Prefix are nullable, so no validation applied
//        }
//    }

//    public class PhoneNumberValidator : AbstractValidator<PhoneNumber>
//    {
//        public PhoneNumberValidator()
//        {
//            RuleFor(x => x.PhoneNumbers)
//                .NotEmpty().WithMessage("Phone numbers are required.");

//            RuleFor(x => x.CountryCode)
//                .NotEmpty().WithMessage("Country code is required.");
//        }
//    }

//    public class EmailAddressValidator : AbstractValidator<EmailAddress>
//    {
//        public EmailAddressValidator()
//        {
//            RuleFor(x => x.Emailaddress)
//                .NotEmpty().WithMessage("Email address is required.")
//                .EmailAddress().WithMessage("Invalid email address format.");
//        }
//    }

//    public class AddressValidator : AbstractValidator<Address>
//    {
//        public AddressValidator()
//        {
//            RuleFor(x => x.Country)
//                .NotEmpty().WithMessage("Country is required.");

//            RuleFor(x => x.City)
//                .NotEmpty().WithMessage("City is required.");

//            RuleFor(x => x.State)
//                .NotEmpty().WithMessage("State is required.");

//            RuleFor(x => x.StreetName)
//                .NotEmpty().WithMessage("Street name is required.");

//            RuleFor(x => x.Building)
//                .NotEmpty().WithMessage("Building is required.");

//            RuleFor(x => x.PostalCode)
//                .NotEmpty().WithMessage("Postal code is required.");

//            // Floor and CommonMark are nullable, so no validation applied
//        }
//    }
//    //public class CreateOrganizationClientDtoValidator : AbstractValidator<CreateOrganizationClientDto>
//    //{
//    //    public CreateOrganizationClientDtoValidator()
//    //    {
//    //        // Name validation (required)
//    //        RuleFor(org => org.Name)
//    //            .NotNull().WithMessage("Name is required.")
//    //            .SetValidator(new NameValidator());

//    //        // PhoneNumber validation (required)
//    //        RuleFor(org => org.PhoneNumber)
//    //            .NotNull().WithMessage("PhoneNumber is required.")
//    //            .SetValidator(new PhoneNumberValidator());

//    //        // Industry validation (required)
//    //        RuleFor(org => org.Industry)
//    //            .NotNull().WithMessage("Industry is required.")
//    //            .NotEmpty().WithMessage("Industry cannot be empty.");

//    //        // EmailAddress validation (required)
//    //        RuleFor(org => org.EmailAddress)
//    //            .NotNull().WithMessage("EmailAddress is required.")
//    //            .SetValidator(new EmailAddressValidator());

//    //        // Address validation (required)
//    //        RuleFor(org => org.Address)
//    //            .NotNull().WithMessage("Address is required.")
//    //            .SetValidator(new AddressValidator());

//    //        // OrganizationType validation (required)
//    //        RuleFor(org => org.OrganizationType)
//    //            .IsInEnum().WithMessage("Invalid Organization Type.");


//    //    }
//    //}
//}


