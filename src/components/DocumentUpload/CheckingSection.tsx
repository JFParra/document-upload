import React, { FC } from "react";
import { Divider, FormLabel, Text, Stack } from "@chakra-ui/react";

interface CheckingSectionProps {
  color: string;
  title: string;
  content: string;
}

const CheckingSection: FC<CheckingSectionProps> = ({
  color,
  title,
  content,
}) => {
  return (
    <>
      <Divider mt="2" borderColor="black" width="50%" mb={4} />
      <Stack direction="column">
        <FormLabel fontWeight="bold">{title}</FormLabel>
        <Text fontSize="sm" as="span" fontWeight="bold" color={color} mb={4}>
          {content}
        </Text>
      </Stack>
      <Divider mt="2" borderColor="black" width="50%" mb={4} />
    </>
  );
};

export default CheckingSection;
