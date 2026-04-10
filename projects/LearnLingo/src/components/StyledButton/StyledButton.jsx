import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  background: ${props => props.color};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.$maxwidth || '100%'};

  border-radius: 12px;
  padding: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: calc(28 / 18);

  transition: background 0.3s ease;

  &:focus,
  &:hover {
    background: ${props => props.$subcolor};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.$maxwidth || '100%'};

  border-radius: 12px;
  padding: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: calc(28 / 18);

  transition: background 0.3s ease;

  &:focus,
  &:hover {
    background: ${props => props.$subcolor};
  }
`;
