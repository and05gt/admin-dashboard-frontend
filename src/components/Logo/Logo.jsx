import { Link } from 'react-router-dom';
import logo1x from '../../assets/img/logo-v2@1x.webp';
import logo2x from '../../assets/img/logo-v2@2x.webp';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={s.logo} to="/dashboard">
      <img src={logo1x} alt="Logo" srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
    </Link>
  );
};
export default Logo;
