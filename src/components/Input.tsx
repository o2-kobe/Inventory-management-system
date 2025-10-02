import type { IconType } from "react-icons";

interface InputProps {
  label: string;
  icon?: IconType;
  inputType?: "text" | "number";
  placeholder: string;
}

const Input = ({
  label,
  icon: Icon,
  inputType = "text",
  placeholder,
}: InputProps) => {
  return (
    <div className="w-1/3">
      <label htmlFor="Item loaction">{label}</label>
      <div className="border border-gray-400 rounded-md flex items-center mt-1">
        {Icon && <Icon color="gray" className="ml-1" />}
        <input
          required
          placeholder={placeholder}
          className="bg-transparent outline-none px-3 py-2 w-full"
          type={inputType}
        />
      </div>
    </div>
  );
};
export default Input;
