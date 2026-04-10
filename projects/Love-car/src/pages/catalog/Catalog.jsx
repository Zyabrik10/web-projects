import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { getCars } from 'redux/cars/cars-actions';

import { useEffect } from 'react';

import Filter from 'components/local/pages/catalog/Filter/Filter';

import Modal from 'components/shared/Modal/Modal';

import { Container, Section } from 'components/shared';
import { CarsList } from 'components/local/pages/catalog';

export default function Catalog() {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars({ page: 1, limit: 12, carsFilters: {} }));
  }, [dispatch]);

  return (
    <>
      <Modal />
      <Section>
        <Container>
          <Filter />
          <CarsList cars={cars} loading={loading} />
        </Container>
      </Section>
    </>
  );
}
