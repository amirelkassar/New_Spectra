import { ViewTeamAside } from './_components/view-team-aside';

const ViewTeamLayout = ({ children }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 h-full'>
      <ViewTeamAside />

      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default ViewTeamLayout;
