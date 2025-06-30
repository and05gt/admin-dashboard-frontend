import sprite from '../../assets/sprite.svg';
import s from './BurgerMenuBtn.module.css';

const BurgerMenuBtn = () => {
  return (
    <button className={s.burgerMenuBtn}>
      <svg width={32} height={32}>
        <use href={`${sprite}#icon-menu-burger`}></use>
      </svg>
    </button>
  );
};
export default BurgerMenuBtn;
