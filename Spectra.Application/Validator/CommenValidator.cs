using FluentValidation;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Validator
{



    public class NameValidator : AbstractValidator<Name>
    {
        public NameValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty().WithMessage("First name is required.")
                .MaximumLength(50).WithMessage("First name must not exceed 50 characters.");

            RuleFor(x => x.LastName)
                .MaximumLength(50).When(x => x.LastName != null).WithMessage("Last name must not exceed 50 characters.");

            RuleFor(x => x.Prefix)
                .MaximumLength(20).When(x => x.Prefix != null).WithMessage("Prefix must not exceed 20 characters.");
        }
    }
    public class PhoneNumberValidator : AbstractValidator<PhoneNumber>
    {
        public PhoneNumberValidator()
        {
            RuleFor(x => x.PhoneNumbers)
                .NotEmpty().WithMessage("Phone number is required.")
                .Matches(@"^\d+$").WithMessage("Phone number must contain only digits.");

            RuleFor(x => x.CountryCode)
                .NotEmpty().WithMessage("Country code is required.")
                .Matches(@"^\+\d{1,3}$").WithMessage("Country code must be a valid format.");
        }
    }
    public class EmailAddressValidator : AbstractValidator<EmailAddress>
    {
        public EmailAddressValidator()
        {
            RuleFor(x => x.Emailaddress)
                .NotEmpty().WithMessage("Email address is required.")
                .EmailAddress().WithMessage("Invalid email format.");
        }
    }
    public class AddressValidator : AbstractValidator<Address>
    {
        public AddressValidator()
        {
            RuleFor(x => x.Country)
                .NotEmpty().WithMessage("Country is required.");

            RuleFor(x => x.City)
                .NotEmpty().WithMessage("City is required.");



            RuleFor(x => x.PostalCode)

                .Matches(@"^\d{5,6}$").WithMessage("Postal code must be between 5 and 6 digits.");

            RuleFor(x => x.Floor)
                .MaximumLength(10).When(x => !string.IsNullOrEmpty(x.Floor)).WithMessage("Floor must not exceed 10 characters.");

            RuleFor(x => x.CommonMark)
                .MaximumLength(100).When(x => !string.IsNullOrEmpty(x.CommonMark)).WithMessage("Common mark must not exceed 100 characters.");
        }
    }
    public class OrganizationValidator : AbstractValidator<Organization>
    {
        public OrganizationValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("Organization name is required.");

            RuleFor(x => x.PhoneNumber)
                .NotNull().WithMessage("Phone number is required.");

            RuleFor(x => x.Industry)
                .NotEmpty().WithMessage("Industry is required.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.");

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.");

            RuleFor(x => x.TaxNumber)
                .MaximumLength(15).When(x => !string.IsNullOrEmpty(x.TaxNumber)).WithMessage("Tax number must not exceed 15 characters.");

            RuleFor(x => x.Website)
                .Matches(@"^https?:\/\/[\w\-\.]+\.\w+").When(x => !string.IsNullOrEmpty(x.Website)).WithMessage("Invalid website format.");

            RuleFor(x => x.RegistrationNumber)
                .MaximumLength(20).When(x => !string.IsNullOrEmpty(x.RegistrationNumber)).WithMessage("Registration number must not exceed 20 characters.");

            RuleFor(x => x.OrganizationType)
                .IsInEnum().WithMessage("Invalid organization type.");
        }
    }
    public class MedicalServiceProviderValidator : AbstractValidator<MedicalServiceProvider>
    {
        public MedicalServiceProviderValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("Medical service provider name is required.");

            RuleFor(x => x.PhoneNumber)
                .NotNull().WithMessage("Phone number is required.");

            RuleFor(x => x.Industry)
                .NotEmpty().WithMessage("Industry is required.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.");

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.");

            RuleFor(x => x.TaxNumber)
                .MaximumLength(15).When(x => !string.IsNullOrEmpty(x.TaxNumber)).WithMessage("Tax number must not exceed 15 characters.");

            RuleFor(x => x.Website)
                .Matches(@"^https?:\/\/[\w\-\.]+\.\w+").When(x => !string.IsNullOrEmpty(x.Website)).WithMessage("Invalid website format.");

            RuleFor(x => x.RegistrationNumber)
                .MaximumLength(20).When(x => !string.IsNullOrEmpty(x.RegistrationNumber)).WithMessage("Registration number must not exceed 20 characters.");

            RuleFor(x => x.LegalPermissionNumber)
                .MaximumLength(20).When(x => !string.IsNullOrEmpty(x.LegalPermissionNumber)).WithMessage("Legal permission number must not exceed 20 characters.");
        }
    }
}




