import { FiMap } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { regionsData } from "../data";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RegionsRoute = () => {
  const [viewRegions, setViewRegions] = useState(false);

  return (
    <div
      className="font-semibold px-3 py-2"
      onClick={() => setViewRegions(true)}
    >
      <div className="flex items-center gap-1 mb-1 cursor-pointer">
        {viewRegions ? <MdExpandMore /> : <FiMap />}Regions
      </div>

      <div
        className={`${
          viewRegions ? "" : "hidden"
        } flex flex-col  items-start ml-6`}
      >
        {regionsData.map((region, i) => (
          <NavLink
            to={`/app/regions/${region.slug}`}
            className={({ isActive }) =>
              ` flex gap-1 items-center font-semibold px-3 py-1  ${
                isActive ? "bg-gray-200 rounded-md" : ""
              }`
            }
            key={i}
          >
            {region.regionName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default RegionsRoute;
