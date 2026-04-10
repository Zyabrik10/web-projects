import bookOpened from 'assets/icon/book-open.svg';
import star from 'assets/icon/star.svg';

import PropTypes from 'prop-types';

import css from './HeaderBoxList.module.css';

export default function HeaderBoxList({
  rating,
  lessons_done,
  price_per_hour,
}) {
  return (
    <ul className={css['list']}>
      <li className={css["item"]}>
        <img src={bookOpened} alt="" />
        <span>Lessons online</span>
      </li>
      <li className={css["item"]}>Lessons done: {lessons_done}</li>
      <li className={css["item"]}>
        <img src={star} alt="" />
        <span>Rating: {rating}</span>
      </li>
      <li className={css["item"]}>
        Price / 1 hour: <span className={css["money"]}>{price_per_hour + '$'}</span>
      </li>
    </ul>
  );
}

HeaderBoxList.propTypes = {
  rating: PropTypes.number,
  lessons_done: PropTypes.number,
  price_per_hour: PropTypes.number,
};
