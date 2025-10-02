import { FaMapMarkerAlt } from "react-icons/fa";
import Input from "./Input";
import CreateNewButton from "./CreateNewButton";

const CreateEquipmentForm = () => {
  return (
    <form>
      <h3 className="font-semibold text-3xl mb-3">Register a new Device</h3>
      <div className="flex flex-col gap-5">
        <div className="flex gap-15">
          <Input
            label="Location"
            placeholder="eg. Recorder office"
            icon={FaMapMarkerAlt}
          />

          <Input label="Brand" placeholder="eg. Lenovo Thinkpad E14" />
        </div>
        <div className="flex gap-15">
          <Input label="Equiptment Type" placeholder="eg. Laptop" />
          <Input label="Serial Number" placeholder="eg. HFjb976" />
        </div>
        <div className="flex gap-15">
          <Input label="Embossment Number" placeholder="eg. JS/ASH/2/5J" />
          <Input label="Quantity" placeholder="eg. 5" inputType="number" />
        </div>
      </div>
      <div className="flex justify-end">
        <CreateNewButton>Submit</CreateNewButton>
      </div>
    </form>
  );
};
export default CreateEquipmentForm;
