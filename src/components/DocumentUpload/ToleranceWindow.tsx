import React from "react";
import { Divider, FormLabel, Flex, Stack, Switch } from "@chakra-ui/react";
import { MdAccessTime } from "react-icons/md";

interface ToleranceWindowProps {
  isToggleOn: boolean;
  handleToggleChange: () => void;
}

const ToleranceWindow: React.FC<ToleranceWindowProps> = ({
  isToggleOn,
  handleToggleChange,
}) => {
  return (
    <Stack direction="column">
      <FormLabel fontWeight="bold">Tolerance Window:</FormLabel>
      <Stack direction="row">
        <Flex direction="row" alignItems="center">
          <Switch
            size="lg"
            colorScheme="brand"
            m="4"
            onChange={handleToggleChange}
          />
          <FormLabel>Toggle {isToggleOn ? "ON" : "OFF"}</FormLabel>
        </Flex>

        <Flex direction="row" alignItems="center">
          <Divider borderColor="black" orientation="vertical" p="2" />
          <MdAccessTime />
          <FormLabel m="4">Select Tolerance Level</FormLabel>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default ToleranceWindow;
