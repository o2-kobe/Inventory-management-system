import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";

import RegionsRoute from "./RegionsRoute";

const SideMenu = () => {
  return (
    <div className="px-4 py-8 border border-r-gray-300 shadow-md border-y-white min-h-screen flex flex-col">
      <div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="bg-white w-[80px]">
            <img src="/logo1.webp" alt="logo" className="bg-white" />
          </div>

          {/* Heading */}
          <div className="font-semibold mb-4">
            <p>Inventory Management </p>
            <p className="text-center mx-auto px-auto">System</p>
          </div>
        </div>

        {/* NavLinks */}
        <div className="text-center mt-5 flex flex-col gap-2">
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              ` flex gap-1 items-center font-semibold px-3 py-2  ${
                isActive ? "bg-gray-200 rounded-md" : ""
              }`
            }
          >
            <MdOutlineDashboard />
            Dashboard
          </NavLink>

          <RegionsRoute />
        </div>
      </div>
      <NavLink
        to="/app/settings"
        className={({ isActive }) =>
          ` flex gap-1 items-center font-semibold px-3 py-2 mt-auto  ${
            isActive ? "bg-gray-200 rounded-md" : ""
          }`
        }
      >
        <MdOutlineSettings /> Settings
      </NavLink>
    </div>
  );
};
export default SideMenu;
