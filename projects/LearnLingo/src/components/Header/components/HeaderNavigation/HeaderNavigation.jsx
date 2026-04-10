import css from './HeaderNavigation.module.css';
import NavigationList from './components/NavigationList/NavigationList';

import PropTypes from 'prop-types';

export default function HeaderNavigation({
  navClasses,
  listClasses,
  itemClasses,
}) {
  const navigationClasses = navClasses ? navClasses.join(' ') : '';

  return (
    <nav className={`${css['nav']} ${navigationClasses}`}>
      <NavigationList listClasses={listClasses} itemClasses={itemClasses} />
    </nav>
  );
}

HeaderNavigation.propTypes = {
  navClasses: PropTypes.array,
  listClasses: PropTypes.array,
  ItemClasses: PropTypes.array,
};
