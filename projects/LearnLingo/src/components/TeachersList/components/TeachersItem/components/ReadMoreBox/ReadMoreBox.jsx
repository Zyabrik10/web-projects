import { useState } from "react";
import { Reviews, ReadMore } from "..";

import css from "./ReadMoreBox.module.css";

import PropTypes from "prop-types";

export default function ReadMoreBox({ experience, reviews }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <>
          <p className={css['experience']}>{experience}</p>
          <Reviews reviews={reviews} />
        </>
      ) : (
        <ReadMore showMore={showMore} setShowMore={setShowMore} />
      )}
    </>
  );
}

ReadMoreBox.propTypes = {
    experience: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.object)
}