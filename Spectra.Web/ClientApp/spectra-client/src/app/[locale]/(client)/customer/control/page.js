import React from 'react';
import Container from '../../_components/container';
import { MedicalCards } from './_components/medical-card';
import { Heading } from '../../_components/heading';

const ControlPage = () => {
  return (
    <Container>
      <div className='p-1 mdl:p-4 xl:p-6 bg-white mdl:bg-transparent'>
        <Heading label='ملخص النشاطات' />
        <MedicalCards />
      </div>
    </Container>
  );
};

export default ControlPage;
