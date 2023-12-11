import React, { FC, useCallback, useState, useRef } from "react";
import {
  Divider,
  FormLabel,
  FormControl,
  Box,
  Progress,
  Stack,
  Select,
  useTheme,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import UploadedFileInfo from "./UploadedFileInfo";
import ToleranceWindow from "./ToleranceWindow";
import ClientSection from "./ClientSection";
import CheckingSection from "./CheckingSection";
import CustomRadioGroup from "./CustomRadioGroup";
import { FiFile } from "react-icons/fi";
import CustomButton from "./CustomButton";

const ColumnRowStack: FC = () => {
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();

  const yellow = theme.colors.brand[50];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    setUploadedFile(uploadedFile);
    setIsUploadComplete(true);
    // Handle the dropped files as needed
    console.log("Dropped files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileInputChange = () => {
    const selectedFile = fileInputRef.current?.files?.[0];

    if (selectedFile) {
      setUploadedFile(selectedFile);
      setIsUploadComplete(true);
    }
  };

  const handleUploadManifestClick = () => {
    // Trigger the hidden file input
    fileInputRef.current?.click();
  };

  const handleToggleChange = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <Stack direction={["column", "column", "row"]} spacing="10">
      {/* Column 1 */}
      <Box p={4} flex="1">
        <FormControl mb={4}>
          <Select fontWeight="bold" placeholder="Select Import Name:">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
        </FormControl>

        <Divider borderColor="black" width="50%" mb={4} />

        <FormControl mb={4}>
          <FormLabel fontWeight="bold">
            Select a manifest that you&apos;d like to import
          </FormLabel>
          {/* FileUploadSection: Drag and Drop box and Upload button */}
          <Box
            mt={6}
            p={4}
            border="2px"
            borderColor="gray.300"
            borderRadius="md"
            textAlign="center"
          >
            {/* Upload File */}
            <FormControl mb={4}>
              <Box
                {...getRootProps()}
                border="2px dashed"
                borderColor={isDragActive ? "teal.500" : "gray.300"}
                borderRadius="md"
                p={4}
                textAlign="center"
                cursor="pointer"
              >
                <Flex direction="column" alignItems="center">
                  <FiFile size={32} color="#ff9e16" />
                  <Input {...getInputProps()} size="md" />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag & Drop Here or <b>Browse</b>
                    </p>
                  )}
                </Flex>
              </Box>
            </FormControl>

            {/* Upload Button */}
            <CustomButton
              variant="primary"
              onClick={handleUploadManifestClick}
              m={4}
            >
              Upload Manifest
            </CustomButton>

            {/* Hidden file input */}
            <Input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </Box>{" "}
        </FormControl>

        {/* Uploaded File Information */}
        {isUploadComplete && uploadedFile && (
          <UploadedFileInfo uploadedFile={uploadedFile} color={yellow} />
        )}

        {/* Upload Progress Bar */}
        {uploadedFile && !isUploadComplete && (
          <Box>
            <FormLabel>Upload Progress</FormLabel>
            <Progress size="md" colorScheme="brand" isIndeterminate />
          </Box>
        )}

        {/* Elapse Date Checking */}
        <CheckingSection
          color={"green"}
          title="Elapse Data Checking"
          content="No Elapsed Dates!"
        />

        {/* Tolerance Windowg */}
        <ToleranceWindow
          isToggleOn={isToggleOn}
          handleToggleChange={handleToggleChange}
        />
      </Box>

      {/* Column 2 */}
      <Box flex="1">
        {/* Social Distance Radio Group*/}
        <CustomRadioGroup
          title={"Split schedule using social distancing?"}
          radioValues={["Yes", "No"]}
          margin={4}
        />

        {/* Location Checking */}
        <CheckingSection
          color={"green"}
          title="Location Checking"
          content="All Available!"
        />

        {/* Client Section */}
        <ClientSection />
      </Box>
    </Stack>
  );
};

export default ColumnRowStack;
