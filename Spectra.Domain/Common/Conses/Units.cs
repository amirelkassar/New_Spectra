using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Common.Conses
{
    public static class Units
    {
        public enum DiseaseDegrees : byte
        {
            Poor,
            Average,
            High
        }
        public enum ParentOccupation : byte
        {
            FatherWorking=1,
            MotherWorking,
            Housewife
        }
        public enum SchoolTypes : byte
        {
            Inclusive=1,
            Daycare,
            RegularSchool,
            Autism_ADHD,
            SpecialNeed
        }
        public enum DevelopmentStatus : byte
        {
            Normal=1,
            MildDelay,
            SignificantDelay
        }
        public enum Rating : byte
        {
            Poor=1,
            Fair,
            Good
        }
        public enum Severity : byte
        {
            Normal=1,
            Mild,
            Moderate,
            Severe
        }
    }
}
