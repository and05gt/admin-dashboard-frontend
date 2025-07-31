import logo1x from "../../assets/img/logo@1x.webp";
import logo2x from "../../assets/img/logo@2x.webp";
import s from "./MainLoader.module.css";

const MainLoader = () => {
  return (
    <div className={s.loaderWrapper}>
      <img
        className={s.loader}
        src={logo1x}
        alt="Logo"
        srcSet={`${logo1x} 1x, ${logo2x} 2x`}
      />
    </div>
  );
};
export default MainLoader;
