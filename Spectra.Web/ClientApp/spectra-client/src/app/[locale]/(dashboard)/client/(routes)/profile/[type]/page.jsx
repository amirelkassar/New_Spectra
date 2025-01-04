import { notFound } from 'next/navigation';

import OrgPage from './org';
import FamilyPage from './family';

const ProfilePage = ({ params }) => {
  const type = params?.type;
  const acceptedTypes = ['family', 'org'];

  if (!type || !acceptedTypes.includes(type)) notFound();

  if (type === 'org') return <OrgPage />;

  if (type === 'family') return <FamilyPage />;
};

export default ProfilePage;
