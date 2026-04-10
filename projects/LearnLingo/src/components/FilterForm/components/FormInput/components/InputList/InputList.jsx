import PropTypes from 'prop-types';

import css from './InputList.module.css';
import InputListItem from './components/InputListItem/InputListItem';
import { nanoid } from '@reduxjs/toolkit';

export default function InputList({ selectors, setText }) {
  return selectors && selectors.length !== 0 ? (
    <div className={css["box"]}>
      <ul className={css['list']}>
        {selectors.map(value => (
            <InputListItem key={nanoid()} value={value} setText={setText} />
        ))}
      </ul>
    </div>
  ) : null;
}

InputList.propTypes = {
  selectors: PropTypes.array,
  setText: PropTypes.func
};
