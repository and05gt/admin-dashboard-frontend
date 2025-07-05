import Container from '../../components/Container/Container.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import pill1x from '../../assets/img/pill@1x.webp';
import pill2x from '../../assets/img/pill@2x.webp';
import elements1x from '../../assets/img/elements@1x.webp';
import elements2x from '../../assets/img/elements@2x.webp';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <main>
      <Container>
        <section className={s.loginSection}>
          <div className={s.logoWrapper}>
            <Logo />
            <p className={s.logoText}>E-Pharmacy</p>
          </div>
          <div className={s.loginWrap}>
            <h1 className={s.loginTitle}>
              Your medication, delivered Say goodbye to all{' '}
              <span>your healthcare</span> worries with us
            </h1>
            <img
              className={s.imgPill}
              src={pill1x}
              alt="Pill"
              srcSet={`${pill1x} 1x, ${pill2x} 2x`}
              width={95}
              height={93}
            />
            <LoginForm />
          </div>
          <img
            className={s.imgElements}
            src={elements1x}
            alt="Elements"
            srcSet={`${elements1x} 1x, ${elements2x} 2x`}
          />
        </section>
      </Container>
    </main>
  );
};
export default LoginPage;
