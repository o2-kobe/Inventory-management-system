import { Link, useParams } from "react-router-dom";
import { getCourtTypeByIds, getRegionBySlug } from "../dataRepo";

const CourtType = () => {
  const { regionSlug, courtTypeId } = useParams();
  const region = regionSlug ? getRegionBySlug(regionSlug) : undefined;
  const courtType =
    region && courtTypeId
      ? getCourtTypeByIds(region.id, Number(courtTypeId))
      : undefined;

  const heading = courtType
    ? `${courtType.courtType}s in ${region?.regionName ?? "Region"}`
    : "Courts";

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-4xl mb-2">{heading}</h3>
          <p className="">Select a court to manage devices</p>
        </div>

        <button className="px-4 cursor-pointer text-sm transition-colors duration-[0.2s] hover:bg-green-700 py-2 rounded-md bg-green-800 text-white">
          Add New Court
        </button>
      </div>

      <ul className="mt-4 text-blue-800 space-y-2">
        {(courtType?.courts ?? []).map((court) => (
          <li key={court.id} className="hover:underline">
            <Link
              className="cursor-pointer"
              to={`/app/regions/${regionSlug}/court-type/${courtTypeId}/court/${court.id}/devices`}
            >
              {court.courtName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CourtType;
