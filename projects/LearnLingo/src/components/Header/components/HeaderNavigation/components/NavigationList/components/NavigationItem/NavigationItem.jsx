import { NavLink } from 'react-router-dom';
import css from './NavigationItem.module.css';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../../../../../redux/website/website-selector';

const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.color};
  }
`;

export default function NavigationItem({ children, path, itemClasses }) {
  const { color } = useSelector(selectWebsite);

  const iClasses = itemClasses ? itemClasses.join(' ') : '';

  return (
    <li className={`${iClasses}`}>
      <StyledLink color={color.primary} className={css['link']} to={path}>
        {children}
      </StyledLink>
    </li>
  );
}

NavigationItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemClasses: PropTypes.array,
};
