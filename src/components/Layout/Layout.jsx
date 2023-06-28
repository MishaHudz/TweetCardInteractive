import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom/dist';

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
        Header
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
