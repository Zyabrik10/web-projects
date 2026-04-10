import { nanoid } from '@reduxjs/toolkit';
import InputList from './components/InputList/InputList';

import css from './FormInput.module.css';

import PropTypes from "prop-types";

export default function FormInput({
  label = '',
  selectors = [],
  setText,
  value = '',
  type = 'text',
  maxwidth = 100,
}) {
  const id = type + nanoid();
  const inputHandler = ({ currentTarget }) => {
    setText(currentTarget.value);
  };

  return (
    <div>
      <label className={css['label']} htmlFor={id}>
        {label}
      </label>

      <div className={css['input-box']}>
        <input
          className={css['input']}
          type={type}
          id={id}
          value={value}
          onChange={inputHandler}
          style={{ maxWidth: `${maxwidth + "px"}` }}
        />
        <button className={`${css['arrow']}`} type="button"></button>
        <InputList selectors={selectors} setText={setText} />
      </div>
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  selectors: PropTypes.array,
  setText: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'password']),
  maxwidth: PropTypes.number,
}