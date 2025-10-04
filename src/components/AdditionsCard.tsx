import { FaCircle } from "react-icons/fa";

const AddtionsCard = () => {
  return (
    <div className="flex items-center w-full px-5 py-3 border border-gray-300 shadow-md rounded-md justify-between">
      <FaCircle size={10} style={{ color: "green" }} />
      <p>
        <strong>Dell Latitude 5420</strong>
      </p>
      <p>
        SN: <strong>GHTX-1234</strong>
      </p>
      <em>
        Added to <strong>Supreme Court</strong>
      </em>
      <span className="text-sm bg-green-800 text-white py-1 px-2 rounded-md">
        By: Daniel Mensah
      </span>
    </div>
  );
};
export default AddtionsCard;
