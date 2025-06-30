import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import useResponsive from '../../hooks/useResponsive.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { isDesktop } = useResponsive();

  return (
    <>
      <Header />
      {isDesktop && <Sidebar />}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
