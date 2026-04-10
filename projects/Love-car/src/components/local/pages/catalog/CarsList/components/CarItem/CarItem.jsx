import { useDispatch } from 'react-redux';

import css from './CarItem.module.css';

import PropTypes from 'prop-types';

import loveSvg from 'img/svg/love.svg';
import loveActiveSvg from 'img/svg/love_active.svg';

import { Button } from 'components/shared';
import { updateCar } from 'redux/cars/cars-actions';
import { openModal } from 'redux/modal/modal-reducer';

export default function CarItem({ car }) {
  const {
    image,
    model,
    year,
    price,
    id,
    carId,
    address,
    rentalCompany,
    type,
    mileage,
    make,
    favorite,
  } = car;

  const dispatch = useDispatch();

  const strMileage = String(mileage);

  const toggleFavoriteHandler = async () => {
    dispatch(updateCar({ id, car: { favorite: !favorite } }));
  };

  const openInfoHandler = async () => {
    dispatch(openModal(car));
  };

  return (
    <div className={css['car-item']}>
      <div className={css['img-box']}>
        <img className={css.img} src={image} alt="" />
        <button
          className={`${css['fav-button']} ${favorite ? 'active' : ''}`}
          type="button"
          onClick={toggleFavoriteHandler}
        >
          <img src={favorite ? loveActiveSvg : loveSvg} alt="" />
        </button>
      </div>
      <div className={css['description-box']}>
        <p className={css['my']}>
          {make}, {new Date(year).getFullYear()}
        </p>
        <p>${price} 000 000</p>
      </div>
      <div className={css['info-box']}>
        <p className={css['car-info']}>{carId}</p>
        <p className={css['car-info']}>
          {address}
          <span>|</span>
          {`${rentalCompany}`}
        </p>
        <p className={css['car-info']}>
          {`${type}`}
          <span>|</span>
          {`${model}`}
          <span>|</span>
          {`${strMileage[0]}0,${strMileage.substring(1)}`}0
        </p>
      </div>
      <Button
        className={css['learn-more']}
        type="button"
        onClick={openInfoHandler}
      >
        Learn More
      </Button>
    </div>
  );
}

CarItem.propTypes = {
  image: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  carId: PropTypes.string,
  address: PropTypes.string,
  rentalCompany: PropTypes.string,
  type: PropTypes.string,
  mileage: PropTypes.number,
  make: PropTypes.string,
  favorite: PropTypes.bool,
};
