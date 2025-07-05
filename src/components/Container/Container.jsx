import { useLocation } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive.js';
import s from './Container.module.css';

const Container = ({ children }) => {
  const { isDesktop } = useResponsive();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={isDesktop && isLoginPage ? s.loginContainer : s.container}>
      {children}
    </div>
  );
};
export default Container;
