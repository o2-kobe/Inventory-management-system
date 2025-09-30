import { useParams } from "react-router-dom";
import { getCourtByIds, getCourtTypeByIds, getRegionBySlug } from "../dataRepo";

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
      <h3 className="font-semibold text-4xl mb-2">{courtName}</h3>
      <p>
        Manage devices within {courtName} ({regionName})
        {courtType ? ` • ${courtType.courtType}` : ""}
      </p>

      <div className="mt-7">
        <table className="w-full border">
          <thead className="bg-gray-200 text-center text-gray-600 uppercase text-sm">
            <th className="thead">Brand</th>
            <th className="thead">Serial Number</th>
            <th className="thead">Embossment Number</th>
            <th className="thead">Quantity</th>
          </thead>

          <tbody>
            {devices.map((d) => (
              <tr key={d.id} className="hover:bg-gray-100 relative">
                <td className="tdata">{d.brand}</td>
                <td className="tdata">{d.serialNumber}</td>
                <td className="tdata">{d.embosment}</td>
                <td className="tdata">{d.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DevicePage;
