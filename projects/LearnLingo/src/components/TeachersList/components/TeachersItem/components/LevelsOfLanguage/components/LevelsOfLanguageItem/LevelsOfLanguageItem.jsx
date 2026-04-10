import css from './LevelsOfLanguageItem.module.css';
import PropTypes from "prop-types";

export default function LevelsOfLanguageItem({ level }) {
  return <li className={css['item']}>{'#' + level}</li>;
}

LevelsOfLanguageItem.propTypes = {
    level: PropTypes.string
}