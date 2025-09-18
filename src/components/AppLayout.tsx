import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-3">
      <SideMenu />
      <Outlet />
    </div>
  );
};
export default AppLayout;
