import React from 'react';
import Container from '../../_components/container';
import { ProfileInfo } from './_components/profile-info';
import { ChildCards } from './_components/child-card';
import { ClientsTable } from './_components/clients-table';

const personData = {
  // Cspell: disable
  fullname: 'محمد محمد علي',
  email: 'mohamed@gmail.com',
  avatar: '',
  id: 12345678902,
  country: 'المملكة العربية السعودية',
  city: 'الرياض',
  profession: 'مدير هيئة حكومية',
  childNo: 2,
  sessionsNo: 7,
  reportsNo: 5,
};

const firmData = {
  fullname: 'منظمة الامل',
  email: 'alamal@gmail.com',
  avatar: '',
  id: 1235346313864,
  country: 'مصر',
  city: 'الاسكندرية',
  specialization: 'هيئة تطوعية',
  type: 'هيئة حكومية',
  clientsNo: '150',
  sessionsNo: '300',
  reportsNo: '500',
  followingsNo: '100',
};

const ProfilePage = () => {
  const isPerson = false;
  return (
    <Container className='space-y-5'>
      <ProfileInfo
        info={isPerson ? personData : firmData}
        type={isPerson ? 'person' : 'firm'}
      />

      {isPerson && <ChildCards />}

      {!isPerson && <ClientsTable />}
    </Container>
  );
};

export default ProfilePage;
