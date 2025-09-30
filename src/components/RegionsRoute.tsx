import { FiMap } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { regionsData } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegionsRoute = () => {
  const [viewRegions, setViewRegions] = useState(false);

  return (
    <div
      className="font-semibold px-3 py-2"
      onClick={() => setViewRegions((r) => !r)}
    >
      <div className="flex items-center gap-1 mb-1 cursor-pointer">
        {viewRegions ? <MdExpandMore /> : <FiMap />}Regions
      </div>

      <div
        className={`${
          viewRegions ? "" : "hidden"
        } flex flex-col gap-2 items-start ml-6`}
      >
        {regionsData.map((region, i) => (
          <Link
            to={`/app/regions/${region.slug}`}
            className="cursor-pointer"
            key={i}
          >
            {region.regionName}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RegionsRoute;
