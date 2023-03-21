import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { ButtonLogout, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}!</p>
      <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogout>
    </Wrapper>
  );
};
