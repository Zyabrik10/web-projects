import PropTypes from 'prop-types';

import css from './FormInput.module.css';
import { nanoid } from '@reduxjs/toolkit';

export default function FormInput({
  label = '',
  type = 'text',
  value = '',
  isIcon = false,
  icon = null,
  placeholder = '',
  required = false,
  setText,
  onIconClick,
}) {
  const inputHander = ({ currentTarget }) => {
    setText(currentTarget.value);
  };

  const id = label + nanoid();

  return (
    <label className={css['label']} htmlFor={id}>
      <input
        id={id}
        className={css['input']}
        onChange={inputHander}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {isIcon ? (
        <img
          className={css['icon']}
          onClick={onIconClick}
          src={icon}
          alt=""
          width="20"
          height="20"
        />
      ) : null}
    </label>
  );
}
FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  isIcon: PropTypes.bool,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setText: PropTypes.func,
  onIconClick: PropTypes.func,
};
