import { nanoid } from '@reduxjs/toolkit';
import css from './LevelsOfLanguage.module.css';

import PropTypes from 'prop-types';
import LevelsOfLanguageItem from './components/LevelsOfLanguageItem/LevelsOfLanguageItem';

export default function LevelsOfLanguage({ levels }) {
  return (
    levels && (
      <ul className={css['list']}>
        {levels.map(level => (
          <LevelsOfLanguageItem key={nanoid()} level={level} />
        ))}
      </ul>
    )
  );
}

LevelsOfLanguage.propTypes = {
  levels: PropTypes.array,
};
