import star from 'assets/icon/star.svg';

import css from "./ReviewsItem.module.css";
import tCss from "../../../../TeachersItem.module.css";

import PropTypes from "prop-types";

export default function ReviewsItem({ review }) {
  const { reviewer_name, reviewer_rating, comment } = review;

  return (
    <li className={css["item"]}>
      <div className={css["box"]}>
        <div className={css["avatar"]}></div>
        <div>
          <p className={`${css["name"]} ${tCss["info-box-mark"]}`}>{reviewer_name}</p>
          <p className={css["rating"]}>
            <img src={star} alt="" />
            <span>
              {typeof reviewer_rating === 'number'
                ? reviewer_rating + '.0'
                : reviewer_rating}
            </span>
          </p>
        </div>
      </div>
      <p className={css["comment"]}>{comment}</p>
    </li>
  );
}

ReviewsItem.propTypes = {
    review: PropTypes.object
}