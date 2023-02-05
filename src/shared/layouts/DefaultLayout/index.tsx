import { Outlet } from "react-router-dom";
import { Menu } from "../../../components/Menu";


export function DefaultLayout() {
  return (
    <div>
        <Menu />
        <Outlet />
    </div>
  );
}