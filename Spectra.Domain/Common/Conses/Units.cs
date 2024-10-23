namespace Spectra.Domain.Common.Conses
{
    public static class Units
    {
        public enum HistoryStatus
        {
            Yes,
            No,
            NoInformationAvailable
        }
        public enum CarerStatus : byte
        {
            NoCaregiver = 1,
            FamilyMember,
            NonFamilyMember,
            TemporaryNonFamilyMember
        }

        public enum CarerCharacteristic : byte
        {
            FacilitatingRehabGoals = 1,
            DelayingRehabGoals,
            NoActiveRuleInRehab
        }
        public enum ImpactType : byte
        {
            Anger = 1,
            Depression,
            Denial,
            FinancialHardship,
            Embarrassment,
            Abandonment,
            Separation,
            NA = 0
        }
        public enum InteractionType : byte
        {
            Appropriate = 1,
            Inappropriate,
            Limited,
            NoFormOfInteraction
        }
        public enum AssessmentTypes : byte
        {
            SpeechLanguageAssessment = 1,
            PsychologicalInitialAssessment = 2,
            Other = 0
        }
        public enum DiseaseDegrees : byte
        {
            Poor,
            Average,
            High
        }
        public enum ParentOccupation : byte
        {
            FatherWorking = 1,
            MotherWorking,
            Housewife
        }
        public enum SchoolTypes : byte
        {
            Inclusive = 1,
            Daycare,
            RegularSchool,
            Autism_ADHD,
            SpecialNeed
        }
        public enum DevelopmentStatus : byte
        {
            Normal = 1,
            MildDelay,
            SignificantDelay
        }
        public enum Rating : byte
        {
            Poor = 1,
            Acceptable,
            Good,
            Unknown,
            Other = 0
        }
        public enum Severity : byte
        {
            Normal = 1,
            Mild,
            Moderate,
            Severe
        }

        public enum TypeOfDelivery : byte
        {
            Normal = 1,
            CS = 2
        }
        public enum EyeContactLevel : byte
        {
            Poor = 1,
            Inconsistent,
            Good,
            AvoidingEyeContact
        }
        public enum QuantityLevel : byte
        {
            Talkative = 1,
            Spontaneous,
            Paucity,
            Poverty
        }

        public enum RateLevel : byte
        {
            Fast = 1,
            Slow,
            Normal,
            Pressured
        }

        public enum VolumeLevel : byte
        {
            Loud = 1,
            Soft,
            Monotone,
            Weak,
            Strong
        }

        public enum FluencyLevel : byte
        {
            Normal = 1,
            Clear,
            ExpressiveAphasia,
            ReceptiveAphasia,
            GlobalAphasia,
            Paraphasia,
            Dysarthria,
            ApraxicSpeech,
            Stuttering
        }

        public enum GrammaticalLevel : byte
        {
            CorrectSyntax = 1,
            Articulated
        }

        public enum ContentLevel : byte
        {
            Directed = 1,
            Coherent
        }
        public enum AffectLevel : byte
        {
            Normal = 1,
            Hostile,
            Inappropriate,
            Blunt,
            Flat
        }

        public enum MoodLevel : byte
        {
            Euthymic = 1,
            Depressed,
            Euphoric,
            Anxious,
            Angry
        }
        public enum CognitiveFunctionLevel : byte
        {
            Impaired = 1,
            WFL
        }
        public enum SocialBehaviorAttitude : byte
        {
            Cooperative = 1,
            Secretive,
            Granted,
            Suspicion,
            Defensive,
            Hostile,
            Mute,
            Evasive,
            Aggressive,
            Open,
            Uncomfortable
        }
        public enum ThoughtsProcessLevel : byte
        {
            Normal = 1,
            Coherent,
            FlightOfIdeas,
            Circumstantial,
            VaguenessOfThinking,
            Confabulation,
            ThoughtBlocking
        }
        public enum InsightAndJudgmentLevel : byte
        {
            Partial = 1,
            WFL,
            Poor
        }

        public enum RiskLevels : byte
        {
            High=1,
            Low,
            SelfReport,
            CarerReport,
            ClinicalEvidence,
            CarerIsAlerted
        }
    }
}
