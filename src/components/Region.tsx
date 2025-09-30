import { FaGavel, FaLandmark } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { getRegionBySlug } from "../dataRepo";

const Region = () => {
  const { regionSlug } = useParams();
  const region = regionSlug ? getRegionBySlug(regionSlug) : undefined;
  const regionTitle = region?.regionName ?? "Unknown Region";
  const superior = region?.courtTypes.find((c) =>
    c.courtType.toLowerCase().includes("superior")
  );
  const circuit = region?.courtTypes.find((c) =>
    c.courtType.toLowerCase().includes("circuit")
  );
  const district = region?.courtTypes.find((c) =>
    c.courtType.toLowerCase().includes("district")
  );

  return (
    <div>
      <h2 className="font-semibold text-4xl mb-3">{regionTitle}</h2>
      <p>Select court type</p>

      <div className="flex items-center gap-10 mt-5">
        <Link
          to={`/app/regions/${regionSlug}/court-type/${superior?.id ?? 1}`}
          className="border border-gray-300 shadow-md transition-all duration-[0.2s] hover:bg-gray-100 cursor-pointer rounded-md p-20 gap-4 flex flex-col items-center"
        >
          <p>
            <FaLandmark size={40} />
          </p>
          <p>Superior Court</p>
        </Link>

        <Link
          to={`/app/regions/${regionSlug}/court-type/${circuit?.id ?? 2}`}
          className="border border-gray-300 shadow-md transition-all duration-[0.2s] hover:bg-gray-100 cursor-pointer rounded-md p-20 gap-4 flex flex-col items-center"
        >
          <p>
            <MdAccountBalance size={40} />
          </p>
          <p>Circuit Court</p>
        </Link>

        <Link
          to={`/app/regions/${regionSlug}/court-type/${district?.id ?? 3}`}
          className="border border-gray-300 shadow-md transition-all duration-[0.2s] hover:bg-gray-100 cursor-pointer rounded-md p-20 gap-4 flex flex-col items-center"
        >
          <p>
            <FaGavel size={40} />
          </p>
          <p>District Court</p>
        </Link>
      </div>

      <p>Or select departments</p>

      <div className="border border-gray-300 shadow-md hover:bg-gray-200 cursor-pointer rounded-md p-20 gap-4 flex flex-col items-center">
        <p>
          <FaBuilding size={40} />
        </p>
        <p>Department</p>
      </div>
    </div>
  );
};
export default Region;
