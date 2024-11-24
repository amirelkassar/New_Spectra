import { mainData } from '@/api/admin';
import { apiAdmin } from '@/api/axios';
import { BackButton } from '@/components/buttons/back-button';
import { UpdateDrug } from './_components/update-drug';

async function EditDrugPage({ params }) {
  const drugId = params?.drugsID || '';

  const { data, error } = await getDrug(drugId);

  if (error)
    return (
      <div>
        <BackButton />
        error: could not find any data for this drug ID
      </div>
    );

  return (
    <div>
      <div className='flex mb-10 items-center gap-4'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل العقار</h2>
      </div>

      <UpdateDrug initialValues={data?.data} />
    </div>
  );
}

export default EditDrugPage;

async function getDrug(drugId) {
  try {
    const response = (
      await apiAdmin.get(mainData.drugs.actions.get(drugId))
    ).data;

    return { data: response, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
