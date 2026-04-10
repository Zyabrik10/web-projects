import { nanoid } from "@reduxjs/toolkit";
import css from "./Reviews.module.css"

import ReviewsItem from "./components/ReviewsItem/ReviewsItem";

import PropTypes from "prop-types";

export default function Reviews({ reviews }) {
  return (
    reviews && (
      <ul className={css["list"]}>
        {reviews.map(review => (
          <ReviewsItem key={nanoid()} review={review} />
        ))}
      </ul>
    )
  );
}

Reviews.propTypes = {
    reviews: PropTypes.array
}