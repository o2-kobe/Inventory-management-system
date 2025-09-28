import { MdAccountCircle } from "react-icons/md";

const Settings = () => {
  return (
    <div className="px-4">
      {/* User details */}
      <div className="flex items-center justify-end w-full mt-4 pr-5">
        <MdAccountCircle size={50} />
        <div className="flex flex-col justify-center">
          <p>Logged in as </p>
          <p className="text-gray-700 text-sm">nana@mail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Settings;
