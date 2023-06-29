import { Outlet } from 'react-router-dom';

import { Header, Main, Navigation, NavigationLink } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <Navigation>
          <NavigationLink to="/">Home page</NavigationLink>
          <NavigationLink to="/tweets">Tweets</NavigationLink>
        </Navigation>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
