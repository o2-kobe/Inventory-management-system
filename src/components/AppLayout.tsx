import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-3">
      <SideMenu />
      <div className="mt-10 px-10">
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
