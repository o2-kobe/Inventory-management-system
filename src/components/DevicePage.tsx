import { useParams } from "react-router-dom";
import { getCourtByIds, getCourtTypeByIds, getRegionBySlug } from "../dataRepo";

import Table from "./Table";

const DevicePage = () => {
  const { regionSlug, courtTypeId, courtId } = useParams();
  const region = regionSlug ? getRegionBySlug(regionSlug) : undefined;
  const courtType =
    region && courtTypeId
      ? getCourtTypeByIds(region.id, Number(courtTypeId))
      : undefined;
  const info =
    region && courtTypeId && courtId
      ? getCourtByIds(region.id, Number(courtTypeId), Number(courtId))
      : undefined;
  const courtName = info?.court.courtName ?? "Court";
  const regionName = region?.regionName ?? info?.region.regionName ?? "Region";
  const devices = info?.court.devices ?? [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-4xl mb-2">{courtName}</h3>
          <p>
            Manage devices within {courtName} ({regionName})
            {courtType ? ` • ${courtType.courtType}` : ""}
          </p>
        </div>

        <div>
          <button className="px-4 cursor-pointer text-sm transition-colors duration-[0.2s] hover:bg-green-700 py-2 rounded-md bg-green-800 text-white">
            Add new Equipment
          </button>
        </div>
      </div>

      <Table devices={devices} />
    </div>
  );
};
export default DevicePage;
