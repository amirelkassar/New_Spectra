import { notFound } from 'next/navigation';
import OrgProfile from '../_org';
import FamilyProfile from '../_family';

const ProfilePage = ({ params }) => {
  const type = params?.type;
  const acceptedTypes = ['family', 'org'];

  if (!type || !acceptedTypes.includes(type)) notFound();

  if (type === 'org') return <OrgProfile />;

  if (type === 'family') return <FamilyProfile />;
};

export default ProfilePage;
