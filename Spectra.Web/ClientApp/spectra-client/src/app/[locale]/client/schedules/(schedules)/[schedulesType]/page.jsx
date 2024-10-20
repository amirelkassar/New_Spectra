import { ScheduleTabs } from '../_components/schedule-tabs';
import { Schedules } from '../_components/schedules';

const SchedulesTypePage = async ({
  params: { schedulesType },
}) => {
  async function getData(dataType = schedulesType) {
    // Fetch data from your API here.

    if (dataType === 'current') {
      return [
        {
          id: '1',
          type: 'session',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'notStarted',
        },
        {
          id: '2',
          type: 'appointment',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'processing',
        },
        {
          id: '3',
          type: 'appointment',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'done',
        },
        // ...
      ];
    } else if (dataType === 'new') {
      return [
        {
          id: '1',
          type: 'session',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'notStarted',
        },
        {
          id: '2',
          type: 'appointment',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'processing',
        },
      ];
    } else if (dataType === 'old') {
      return [
        {
          id: '1',
          type: 'session',
          doctor: 'احمد محمد كمال',
          child: 'محمد عبد الله الشيخ',
          date: '2023-05-15',
          status: 'notStarted',
        },
      ];
    } else {
      return [];
    }
  }

  const data = await getData();

  return (
    <>
      <ScheduleTabs type={schedulesType} />
      <Schedules data={data} />
    </>
  );
};

export default SchedulesTypePage;
