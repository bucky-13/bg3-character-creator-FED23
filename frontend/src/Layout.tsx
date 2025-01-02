import { Outlet } from 'react-router-dom';
import { TopNavbar } from './components/TopNavBar';
import { Footer } from './components/Footer';

export const Layout = () => {
  return (
    <>
      <header>
        <TopNavbar></TopNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
