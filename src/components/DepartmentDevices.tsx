import { useParams } from "react-router-dom";
import { getDepartmentByIds } from "../dataRepo";
import Table from "./Table";

const DepartmentDevices = () => {
  const { regionSlug, departmentId } = useParams();
  const info =
    regionSlug && departmentId
      ? getDepartmentByIds(regionSlug, Number(departmentId))
      : undefined;
  const departmentName = info?.department.departmentName ?? "Department";
  const regionName = info?.region.regionName ?? "Region";
  const devices = info?.department.devices ?? [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-4xl mb-2">{departmentName}</h3>
          <p>
            Manage devices within {departmentName} ({regionName})
          </p>
        </div>

        <button className="px-4 cursor-pointer text-sm transition-colors duration-[0.2s] hover:bg-green-700 py-2 rounded-md bg-green-800 text-white">
          Add new Equipment
        </button>
      </div>

      <Table devices={devices} />
    </div>
  );
};
export default DepartmentDevices;
