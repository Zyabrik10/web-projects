import { Container, Section } from 'components/shared';
import Modal from 'components/shared/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { CarsList, Filter } from 'components/local/pages/catalog';

export default function Favorites() {
  const [favCars, setFavCars] = useState([]);
  const { cars, loading } = useSelector(selectCars);

  useEffect(() => {
    setFavCars(cars.filter(({ favorite }) => favorite === true));
  }, [cars]);

  return (
    <>
      <Modal />
      <Section>
        <Container>
          <Filter />
          <CarsList cars={favCars} loading={loading} />
        </Container>
      </Section>
    </>
  );
}
