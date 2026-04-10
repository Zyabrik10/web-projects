import { useSelector } from 'react-redux';
import css from './Avatar.module.css';

import PropTypes from 'prop-types';
import selectWebsite from '../../../../../../redux/website/website-selector';

export default function Avatar({ src, alt }) {
  const { color } = useSelector(selectWebsite);
  return (
    <div
      className={css['box']}
      style={{
        borderColor: color.secondary,
      }}
    >
      <div className={css['status']}></div>
      <img
        src={src}
        alt={alt}
        className={css['avatar']}
        width="96"
        height="96"
      />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
