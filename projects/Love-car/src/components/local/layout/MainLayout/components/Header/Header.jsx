import { Navigation } from './components';
import { Container } from 'components/shared';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles['header']}>
      <Container className={styles['header-container']}>
        <Navigation />
      </Container>
    </header>
  );
}
