import { Link, useParams } from "react-router-dom";
import { listDepartmentsByRegionSlug } from "../dataRepo";
import CreateNewButton from "./CreateNewButton";

const Departments = () => {
  const { regionSlug } = useParams();
  const data = regionSlug ? listDepartmentsByRegionSlug(regionSlug) : undefined;
  const regionName = data?.region.regionName ?? "Region";
  const departments = data?.departments ?? [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-4xl mb-2">
            Departments in {regionName}
          </h3>
          <p className="">Select a department to manage devices</p>
        </div>

        <CreateNewButton>Add new Department</CreateNewButton>
      </div>

      <ul className="mt-4 text-blue-800 space-y-2">
        {departments.map((d) => (
          <li key={d.id} className="hover:underline">
            <Link
              className="cursor-pointer"
              to={`/app/regions/${regionSlug}/departments/${d.id}/devices`}
            >
              {d.departmentName}
            </Link>
          </li>
        ))}
        {departments.length === 0 ? (
          <li className="text-gray-500">No departments available</li>
        ) : null}
      </ul>
    </div>
  );
};
export default Departments;
