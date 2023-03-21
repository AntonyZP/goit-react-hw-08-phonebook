import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #0926a6;
    font-weight: 900;
  }
`;
