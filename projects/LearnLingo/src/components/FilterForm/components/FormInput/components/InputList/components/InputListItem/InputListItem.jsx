import css from './InputListItem.module.css';

import PropTypes from "prop-types";

export default function InputListItem({ value, setText }) {
  const buttonHandler = ({ currentTarget }) => setText(currentTarget.innerText);

  return (
    <li>
      <button className={css['button']} type="button" onClick={buttonHandler}>
        {value}
      </button>
    </li>
  );
}

InputListItem.propTypes = {
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
  setText: PropTypes.func
}