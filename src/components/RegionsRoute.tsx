import { FiMap } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { regions } from "../data";
import { useState } from "react";

const RegionsRoute = () => {
  const [viewRegions, setViewRegions] = useState(false);

  return (
    <div onClick={() => setViewRegions((r) => !r)}>
      <div className="flex items-center gap-2">
        {viewRegions ? <MdExpandMore /> : <FiMap />}Regions
      </div>

      <div
        className={`${
          viewRegions ? "" : "hidden"
        } flex flex-col gap-2 items-start ml-5`}
      >
        {regions.map((region, i) => (
          <p className="" key={i}>
            {region}
          </p>
        ))}
      </div>
    </div>
  );
};
export default RegionsRoute;
