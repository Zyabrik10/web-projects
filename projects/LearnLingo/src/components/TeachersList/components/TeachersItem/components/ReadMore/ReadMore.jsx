import css from "./ReadMore.module.css";

import PropTypes from "prop-types";

export default function ReadMore({ showMore, setShowMore}) {
  const buttonHandler = () => setShowMore(!showMore);

  return <button className={css["button"]} type="button" onClick={buttonHandler}>Read More</button>;
}

ReadMore.propTypes = {
  showMore: PropTypes.bool,
  setShowMore: PropTypes.func
}