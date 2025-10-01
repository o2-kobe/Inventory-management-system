import type { Device } from "../dataRepo";
import Options from "./Options";

interface TableProps {
  devices: Device[];
}

const Table = ({ devices }: TableProps) => {
  return (
    <div className="mt-7">
      <table className="w-full">
        <thead className="text-center text-gray-700 uppercase text-sm">
          <th className="thead">O/N</th>
          <th className="thead">Location</th>
          <th className="thead">Brand</th>
          <th className="thead">Equipment Type</th>
          <th className="thead">Serial Number</th>
          <th className="thead">Embossment Number</th>
          <th className="thead">Quantity</th>
        </thead>

        <tbody>
          {devices.map((d) => (
            <tr key={d.id} className="hover:bg-gray-100 relative">
              <td className="tdata">0{d.id}</td>
              <td className="tdata">J Office</td>
              <td className="tdata">{d.brand}</td>
              <td className="tdata">Laptop</td>
              <td className="tdata">{d.serialNumber}</td>
              <td className="tdata">{d.embosment}</td>
              <td className="tdata">{d.quantity}</td>
              <td className="cursor-pointer px-1 relative">
                <Options />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
