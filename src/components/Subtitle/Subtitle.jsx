import { useLocation } from 'react-router-dom';
import s from './Subtitle.module.css';

const Subtitle = () => {
  const location = useLocation();
  const dashboard = location.pathname === '/dashboard' && 'Dashboard';
  const allOrders = location.pathname === '/orders' && 'All orders';
  const allProducts = location.pathname === '/products' && 'All products';
  const allSuppliers = location.pathname === '/suppliers' && 'All suppliers';
  const allCustomers = location.pathname === '/customers' && 'All customers';

  return (
    <div className={s.subtitleContainer}>
      <p className={`${s.subtitle} ${s.path}`}>
        {dashboard || allOrders || allProducts || allSuppliers || allCustomers}
      </p>
      <p className={s.subtitle}>|</p>
      <p className={s.subtitle}>vendor@gmail.com</p>
    </div>
  );
};
export default Subtitle;
