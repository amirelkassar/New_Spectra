import { Container } from '@/client/_components/ui';

const FamilyPage = ({ params }) => {
  const familyId = params?.familyId;

  return (
    <Container>
      <h1>Family Page</h1>
      <p>Family ID: {familyId}</p>
    </Container>
  );
};

export default FamilyPage;
