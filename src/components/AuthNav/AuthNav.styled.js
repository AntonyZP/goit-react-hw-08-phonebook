import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WrapperAuth = styled.div`
  margin-top: 20px;
`;

export const Link = styled(NavLink)`
  margin-top: 20px;
  margin-left: 20px;
  padding: 6px;
  font-size: 18px;
  color: #ffffff;
  width: 200px;
  background: #553e3e;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 3px 5px #3d3d3d;
  cursor: pointer;
  transition: all 100ms ease 0s;
  &:hover,
  &:focus {
    background: #7d5f49;
    box-shadow: 2px 7px 7px #7d5f49;
  }
`;
