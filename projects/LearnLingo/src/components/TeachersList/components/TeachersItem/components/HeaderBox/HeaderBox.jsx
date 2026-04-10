import { HeaderBoxList, HeaderHeart } from "./components";
import css from "./HeaderBox.module.css";

import tCss from "../../TeachersItem.module.css";

import PropTypes from "prop-types";

export default function HeaderBox({rating, lessons_done, price_per_hour, id}) {
  return (
    <div className={css['box']}>
      <p className={`${css["langs"]} ${tCss['info-box-mark']}`}>Languages</p>
      <HeaderBoxList
        rating={rating}
        lessons_done={lessons_done}
        price_per_hour={price_per_hour}
      />
      <HeaderHeart id={id} />
    </div>
  );
}


HeaderBox.propTypes = {
    rating: PropTypes.number,
    lessons_done: PropTypes.number,
    price_per_hour: PropTypes.number,
    id: PropTypes.string,
}