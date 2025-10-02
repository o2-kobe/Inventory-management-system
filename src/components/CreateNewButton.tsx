import { useModal } from "../contexts/ModalContext";
import CourtForm from "./CourtForm";
import CreateEquipmentForm from "./EquipmentForm";

const CreateNewButton = ({
  children,
  type,
}: {
  children: string;
  type?: "equipment" | "court";
}) => {
  const { openModal } = useModal();

  function handleClick() {
    if (type === "equipment") openModal(<CreateEquipmentForm />);
    else if (type === "court") {
      openModal(<CourtForm />);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 cursor-pointer text-sm transition-colors duration-[0.2s] hover:bg-green-700 py-2 rounded-md bg-green-800 text-white"
      >
        {children}
      </button>
    </div>
  );
};
export default CreateNewButton;
