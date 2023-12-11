import React, { FC } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/react';

import CustomModalHeader from './CustomModalHeader';
import ColumnRowStack from './ColumnRowStack';
import CustomButton from './CustomButton';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();


  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
      <ModalOverlay />
      <ModalContent p="4">
        <ModalCloseButton
          left="3"
          bgColor={theme.colors.brand[500]}
          color="white"
        />
        <CustomModalHeader />
        <ModalBody>
          <ColumnRowStack />
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Stack direction="column" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" color="#003b71" mb={4}>
              Data in the import file is correct. Please press Continue to import.
            </Text>
            <Stack direction="row" alignItems="center">
              <CustomButton m={4} variant="primary" >Continue Import</CustomButton>
              <CustomButton variant="cancel" m={4} onClick={onClose} >Cancel</CustomButton>
            </Stack>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal >
  );
};

export default CustomModal;
