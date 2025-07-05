import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import useResponsive from '../../hooks/useResponsive.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className={s.mainContainer}>
      <Header />
      {isDesktop && <Sidebar />}
      <main className={s.main}>
        <Container>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};
export default SharedLayout;
