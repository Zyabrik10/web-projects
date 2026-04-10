import { Container, GridContainer, Section } from 'components/shared';

import styles from './About.module.css';

export default function About() {
  return (
    <Section>
      <Container>
        <GridContainer className={styles['page-description']}>
          <li>
            <h2>Home Page</h2>
            <p>
              On this page, you will find information about a wide range of
              services offered by our company. Experience a modern approach to
              car rental and choose from a diverse fleet that caters to even the
              most discerning clients. We prioritize your comfort and safety
              during each journey.
            </p>
          </li>
          <li>
            <h2>Cars Catalog</h2>
            <p>
              The catalog page allows for a detailed overview of our car fleet.
              Use filters by brand, hourly rental price, and mileage to find the
              perfect option for your trip. We guarantee a high standard of
              quality for each vehicle.
            </p>
          </li>
          <li>
            <h2>Favorites</h2>
            <p>
              The advertisements page allows you to view and add favorite cars,
              creating your personal fleet for future trips. Convenient
              navigation and actions performed in a few taps make using the
              application simple and efficient.
            </p>
          </li>
        </GridContainer>
      </Container>
    </Section>
  );
}
