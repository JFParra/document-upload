import React, { FC } from "react";
import { Box, FormLabel, Text, Stack } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";

interface UploadedFileInfoProps {
  uploadedFile: File;
  color: string;
}

const UploadedFileInfo: FC<UploadedFileInfoProps> = ({
  uploadedFile,
  color,
}) => {
  return (
    <Box p={4}>
      <FormLabel>Uploaded File Information</FormLabel>
      <Stack direction="row" alignItems="center">
        <FiFile size={32} color={color} />
        <Box>
          <Text color={color}>File Name: {uploadedFile.name}</Text>
          <Text color={color}>File Type: {uploadedFile.type}</Text>
          <Text color={color}>
            File Size:{" "}
            {Math.round((uploadedFile.size / 1024 / 1024) * 100) / 100} MB
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default UploadedFileInfo;
