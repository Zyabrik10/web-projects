import css from './LocalInfoList.module.css';
import tCss from '../../TeachersItem.module.css';

import PropTypes from 'prop-types';

export default function LocalInfoList({ languages, lesson_info, conditions }) {
  return (
    <ul className={css['list']}>
      <li>
        <span className={tCss['info-box-mark']}>Speaks: </span>
        <span className={`${css["value"]} ${css["lang"]}`}>
          {languages?.map((language, index) => {
            if (index + 1 === languages.length) return language;

            return language + ', ';
          })}
        </span>
      </li>
      <li>
        <span className={tCss['info-box-mark']}>Lesson Info: </span>
        <span className={css["value"]}>{lesson_info}</span>
      </li>
      <li>
        <span className={tCss['info-box-mark']}>Conditions: </span>
        <span className={css["value"]}>{conditions.join(' ')}</span>
      </li>
    </ul>
  );
}

LocalInfoList.propTypes = {
  languages: PropTypes.array,
  lesson_info: PropTypes.string,
  conditions: PropTypes.array,
};
