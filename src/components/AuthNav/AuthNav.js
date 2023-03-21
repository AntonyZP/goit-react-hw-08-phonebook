import { Link, WrapperAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapperAuth>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </WrapperAuth>
  );
};
