import { useSelector } from 'react-redux';
import NavigationItem from './components/NavigationItem/NavigationItem';
import css from './NavigationList.module.css';

import PropTypes from 'prop-types';
import { selectAuth } from '../../../../../../redux/auth/auth-selector';

export default function NavigationList({ listClasses, itemClasses }) {
  const lClasses = listClasses ? listClasses.join(' ') : '';

  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <ul className={`${css['navigation-list']} ${lClasses}`}>
      <NavigationItem itemClasses={itemClasses} path="/">Home</NavigationItem>
      <NavigationItem itemClasses={itemClasses} path="/Teachers">Teachers</NavigationItem>
      {isLoggedIn ? (
        <NavigationItem itemClasses={itemClasses} path="/Favorites">Favorites</NavigationItem>
      ) : null}
    </ul>
  );
}

NavigationList.propTypes = {
  listClasses: PropTypes.array,
  itemClasses: PropTypes.array,
};
