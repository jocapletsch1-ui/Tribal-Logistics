import { NavLink } from "react-router";
import s from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <aside className={s.sidebar}>
        <h2 className={s.logo}>TribalLog</h2>
        <nav className={s.menu}>
          <NavLink to="/home" className={s.item}>
            Home
          </NavLink>
          <NavLink to="/cadastro" className={s.item}>
            Cadastro
          </NavLink>
          <NavLink to="/login" className={s.item}>
            Sair
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
export default Sidebar;
