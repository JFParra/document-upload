import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";

const CustomModalHeader: React.FC = () => {
  return (
    <Stack direction="column" alignItems="center">
      <Text fontSize="3xl" as="span" fontWeight="bold" color="#003b71" mb={4}>
        Document Upload
        <Divider mt="2" borderColor="black" />
      </Text>
    </Stack>
  );
};

export default CustomModalHeader;
