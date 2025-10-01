import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-3 h-screen">
      <SideMenu />
      <div className="my-10 px-10 overflow-y-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
