import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Section } from 'components/shared';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Section>
      <Container>
        <h1 style={{ textAlign: 'center' }}>404</h1>
      </Container>
    </Section>
  );
}
