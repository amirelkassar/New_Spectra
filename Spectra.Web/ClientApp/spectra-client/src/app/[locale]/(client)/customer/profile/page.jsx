import React from 'react';
import Container from '../../_components/container';
import { ProfileInfo } from './_components/profile-info';
import { ChildCards } from './_components/child-card';

const ProfilePage = () => {
  return (
    <Container className=''>
      <ProfileInfo />
      <ChildCards />
    </Container>
  );
};

export default ProfilePage;
