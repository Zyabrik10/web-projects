import CarItem from './components/CarItem/CarItem';

import PropTypes from 'prop-types';
import { GridContainer } from 'components/shared';

import { Hourglass } from 'react-loader-spinner';

export default function CarList({ cars = [], loading }) {
  return (
    <>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      )}
      {!loading && cars.length === 0 && (
        <p style={{ textAlign: 'center' }}>No cars</p>
      )}
      {!loading && (
        <GridContainer>
          {cars.length !== 0 &&
            cars.map(car => {
              return (
                <li key={car.id}>
                  <CarItem car={car} />
                </li>
              );
            })}
        </GridContainer>
      )}
    </>
  );
}

CarList.propTypes = {
  cars: PropTypes.array,
  loading: PropTypes.bool,
};
