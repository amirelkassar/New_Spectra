import { Section } from "../../_components/section";
import { Carousel } from "../../_components/carousel";
import { TeamMember } from "../../_components/team-member";

export const OurMedicalTeam = () => {
  return (
    <Section
      type="more"
      btnLabel="جميع التخصصات"
      heading="فريقنا الطبي"
      aria-label="Our Medical Team"
      aria-labelledby="our-medical-team"
      id="our-medical-team"
    >
      <div className="space-y-5">
        <div>
          <h3 className="text-center font-bold text-base mdl:text-xl">
            اخصائيين التوحد
          </h3>
          <Carousel
            data={[
              <TeamMember key={1} />,
              <TeamMember key={2} />,
              <TeamMember key={3} />,
              <TeamMember key={4} />,
              <TeamMember key={5} />,
            ]}
          />
        </div>
        <h3 className="text-center font-bold text-base mdl:text-xl">
          اخصائيين التغذية
        </h3>

        <Carousel
          data={[
            <TeamMember key={1} />,
            <TeamMember key={2} />,
            <TeamMember key={3} />,
            <TeamMember key={4} />,
            <TeamMember key={5} />,
          ]}
        />
      </div>
    </Section>
  );
};