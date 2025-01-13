import IncomingMeet from '@/assets/icons/incoming-meet';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import Button from '@/components/button';

export const CellActions = ({ data }) => {
  if (data.status === 'available') return <IncomingMeet />;
  return (
    <div className='flex justify-center items-center'>
      <Button variant='ghost'>
        <ThreeDotsIcon />
      </Button>
    </div>
  );
};
