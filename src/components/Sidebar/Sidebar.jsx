import SidebarMenu from '../SidebarMenu/SidebarMenu.jsx';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <SidebarMenu />
    </aside>
  );
};
export default Sidebar;
