import { Link, useLocation } from 'react-router-dom';
import logoLogin1x from '../../assets/img/logo@1x.webp';
import logoLogin2x from '../../assets/img/logo@2x.webp';
import logo1x from '../../assets/img/logo-v2@1x.webp';
import logo2x from '../../assets/img/logo-v2@2x.webp';
import s from './Logo.module.css';

const Logo = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Link
      className={isLoginPage ? `${s.logoLogin}` : `${s.logo}`}
      to="/dashboard">
      {isLoginPage ? (
        <img
          src={logoLogin1x}
          alt="LogoLogin"
          srcSet={`${logoLogin1x} 1x, ${logoLogin2x} 2x`}
        />
      ) : (
        <img src={logo1x} alt="Logo" srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
      )}
    </Link>
  );
};
export default Logo;
