import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx';
import SidebarMenu from '../SidebarMenu/SidebarMenu.jsx';
import s from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = e => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  const handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [setIsMenuOpen]);

  return (
    <>
      <button
        className={s.burgerMenu}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-menu-burger`}></use>
        </svg>
      </button>

      {isMenuOpen && (
        <div className={s.menuOverlay} onClick={handleClickOutside}>
          <div className={s.menu} onClick={handleCloseMenu}>
            <button className={s.btn} type="button" onClick={handleCloseMenu}>
              <svg width={32} height={32}>
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </button>
            <SidebarMenu />
            <LogoutBtn />
          </div>
        </div>
      )}
    </>
  );
};
export default BurgerMenu;
