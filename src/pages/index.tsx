// pages/index.tsx

import { Button, Center } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../components/DocumentUpload/CustomModal";

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center h="100vh">
      <Button onClick={onOpen}>Open Modal</Button>

      <CustomModal isOpen={isOpen} onClose={onClose} />
    </Center>
  );
};

export default Home;
