import { Description } from './_components/description';
import { BeforeTreatment } from './_components/before-treatment';
import { CureMethod } from './_components/cure-method';
import { AfterTreatment } from './_components/after-treatment';
import { FamilyReview } from './_components/family-review';

export const Story = ({ data = {} }) => {
  return (
    <>
      <Description
        childName={data?.childName}
        daignosis={data?.daignosis}
        image={data?.image}
        description={data?.story.description}
      />
      <BeforeTreatment
        data={data?.story?.beforeTreatment}
      />
      <CureMethod data={data?.story?.cureMethod} />
      <AfterTreatment data={data?.story?.afterTreatment} />
      <FamilyReview
        familyReview={data?.story?.familyReview}
        video={data?.story?.video}
        childName={data?.childName}
      />
    </>
  );
};
