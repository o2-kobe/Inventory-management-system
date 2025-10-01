import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const Options = () => {
  const [viewOptions, setViewOptions] = useState(false);
  return (
    <div>
      <span onClick={() => setViewOptions((view) => !view)}>
        <FiMoreHorizontal />
      </span>

      <div
        className={`${
          viewOptions ? "" : "hidden"
        } p-2 flex z-10 flex-col text-sm shadow-md bg-white items-start gap-2 border border-gray-300 absolute mt-[-2px] ml-[-10px] rounded-md`}
      >
        <button className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
          <BiEdit style={{ marginTop: "2px" }} /> Edit
        </button>
        <button className="cursor-pointer flex items-center gap-1 hover:text-red-500">
          <BiTrash /> Delete
        </button>
      </div>
    </div>
  );
};
export default Options;
