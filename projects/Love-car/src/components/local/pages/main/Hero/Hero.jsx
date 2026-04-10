import { Container, Section } from "components/shared";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section className={`${styles['hero']}`}>
      <Container className={styles['hero-container']}>
        <h1>LoveCars</h1>
        <p className={styles['hero-description']}>
          Welcome to the application that embodies the advanced capabilities of
          a company specializing in car rental services in Ukraine. Our
          application is designed for maximum user convenience and to provide
          the most up-to-date information.
        </p>
      </Container>
    </Section>
  );
}
