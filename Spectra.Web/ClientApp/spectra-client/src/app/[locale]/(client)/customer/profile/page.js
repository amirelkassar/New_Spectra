import React from 'react';
import Container from '../../_components/container';
import { ProfileInfo } from './_components/profile-info';
import { ChildCard } from './_components/child-card';

const ProfilePage = () => {
  return (
    <Container className='p-1 mdl:p-4 xl:p-6 bg-white mdl:bg-transparent'>
      <ProfileInfo />
      <ChildCard />
    </Container>
  );
};

export default ProfilePage;
