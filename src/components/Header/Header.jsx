import useResponsive from '../../hooks/useResponsive.js';
import BurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn.jsx';
import Logo from '../Logo/Logo.jsx';
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx';
import Subtitle from '../Subtitle/Subtitle.jsx';
import Title from '../Title/Title.jsx';
import s from './Header.module.css';

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <header className={s.header}>
      {(isMobile || isTablet) && <BurgerMenuBtn />}
      <div className={s.headerWrap}>
        <Logo />
        <div className={s.headerTitle}>
          <Title />
          <Subtitle />
        </div>
      </div>
      {isDesktop && <LogoutBtn />}
    </header>
  );
};
export default Header;
