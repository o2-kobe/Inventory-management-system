import { FaGavel, FaLandmark } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { getRegionBySlug } from "../dataRepo";

const Region = () => {
  const { regionSlug } = useParams();
  const region = regionSlug ? getRegionBySlug(regionSlug) : undefined;
  const regionTitle = region?.regionName ?? "Unknown Region";
  const availableTypes = region?.courtTypes ?? [];

  return (
    <div>
      <h2 className="font-semibold text-4xl mb-3">{regionTitle} Region</h2>
      <p>Select court type</p>

      <div className="flex items-center gap-10 mt-5">
        {availableTypes.map((ct) => {
          const name = ct.courtType.toLowerCase();
          const Icon = name.includes("superior")
            ? FaLandmark
            : name.includes("circuit")
            ? MdAccountBalance
            : FaGavel;
          return (
            <Link
              key={ct.id}
              to={`/app/regions/${regionSlug}/court-type/${ct.id}`}
              className="border border-gray-300 shadow-md transition-all duration-[0.2s] hover:bg-gray-100 cursor-pointer rounded-md p-20 gap-4 flex flex-col items-center"
            >
              <p>
                <Icon size={40} />
              </p>
              <p>{ct.courtType}</p>
            </Link>
          );
        })}
      </div>

      {region?.departments && region.departments.length > 0 ? (
        <>
          <p className="my-4">Or select departments</p>
          <Link
            to={`/app/regions/${regionSlug}/departments`}
            className="border w-[264px] border-gray-300 shadow-md hover:bg-gray-200 cursor-pointer rounded-md p-20 gap-4 flex flex-col mb-5 items-center"
          >
            <p>
              <FaBuilding size={40} />
            </p>
            <p>Departments</p>
          </Link>
        </>
      ) : null}
    </div>
  );
};
export default Region;
