import css from './TeachersItem.module.css';

import PropTypes from 'prop-types';
import { Avatar } from './components';
import InfoBox from './components/InfoBox/InfoBox';

export default function TeachersItem({ teacher }) {
  const { name, avatar_url } = teacher;

  return (
    <li className={css['item']}>
      <Avatar src={avatar_url} alt={name} />
      <InfoBox teacher={teacher} />
    </li>
  );
}

TeachersItem.propTypes = {
  teacher: PropTypes.object,
};
