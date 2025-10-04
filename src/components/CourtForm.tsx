import React from "react";
import CreateNewButton from "./CreateNewButton";
import Input from "./Input";

const CourtForm = React.memo(() => {
  return (
    <form>
      <h3 className="font-semibold text-3xl mb-3">Register a new Court</h3>
      <div className="flex flex-col gap-5">
        <div className="flex gap-15">
          <Input label="Court Name" placeholder="eg. Tema Circuit Court" />
        </div>
        <div className="flex gap-15">
          <Input label="RegionId" placeholder="eg. ejhsghisf8" />
        </div>
        <div className="flex gap-15">
          <Input label="CourtType Id" placeholder="eg. ejhsfg7is" />
        </div>
      </div>
      <div className="flex justify-end">
        <CreateNewButton>Submit</CreateNewButton>
      </div>
    </form>
  );
});
export default CourtForm;
