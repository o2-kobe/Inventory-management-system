import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { ModalProvider } from "../contexts/ModalContext";

const AppLayout = () => {
  return (
    <ModalProvider>
      <div className="grid grid-cols-[16rem_1fr] gap-3 h-screen">
        <SideMenu />
        <div
          id="main-content"
          className="my-10 px-10 overflow-y-auto hide-scrollbar"
        >
          <Outlet />
        </div>
      </div>
    </ModalProvider>
  );
};
export default AppLayout;
