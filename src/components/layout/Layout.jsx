import { Outlet } from 'react-router-dom';
import { SkipLink } from './SkipLink.jsx';
import { UtilityBar } from './UtilityBar.jsx';
import { Masthead } from './Masthead.jsx';
import { Footer } from './Footer.jsx';
import { useHashScroll } from '../../hooks/useHashScroll.js';

/* The chrome every page shares. Pages render into <Outlet />. */
export function Layout() {
  useHashScroll();

  return (
    <>
      <SkipLink />
      <UtilityBar />
      <Masthead />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
