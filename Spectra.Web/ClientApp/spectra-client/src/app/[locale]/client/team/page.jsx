import React from 'react';
import Container from '../_components/container';
import Card from '@/components/card';
import { Heading } from '../_components/heading';
import { TeamTable } from './_components/team-table';

const TeamPage = () => {
  return (
    <Container>
      <section>
        <Card>
          <Heading label='فريقنا الطبي' />
          <TeamTable />
        </Card>
      </section>
    </Container>
  );
};

export default TeamPage;
