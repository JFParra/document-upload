import React, { FC } from "react";
import TestingCenterStack from "./TestingCenterStack";
import CustomRadioGroup from "./CustomRadioGroup";

const ClientSection: FC = () => {
  const testingCenterTitles = [
    "Testing Center 1",
    "Testing Center 2",
    "Testing Center 3",
    "Testing Center 4",
  ];
  const testingCenterOptions = [
    ["Option 1", "Option 2"],
    ["Option 3", "Option 4"],
    ["Option 5", "Option 6"],
    ["Option 7", "Option 8"],
  ];

  return (
    <>
      <CustomRadioGroup
        title="Client:"
        radioValues={["Single", "Multiple"]}
        margin={4}
      />

      <TestingCenterStack
        titles={testingCenterTitles}
        options={testingCenterOptions}
      />
    </>
  );
};

export default ClientSection;
