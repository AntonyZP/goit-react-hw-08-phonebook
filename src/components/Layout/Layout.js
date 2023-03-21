import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Section } from './Layout.styled';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Section>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
