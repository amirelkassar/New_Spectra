import { WorkScheduleProvider } from '../_components/work-schedule-context';

const WorkScheduleLayout = ({ children }) => {
  return <WorkScheduleProvider>{children}</WorkScheduleProvider>;
};

export default WorkScheduleLayout;
