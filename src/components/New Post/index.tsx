import { useState } from "react";
import {
  Box,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import ProfileIcon from "../Profile Icon";
import Username from "../username";
import { UsernameProps } from "../../types";

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePost = () => {
    // Handle posting logic here
    setIsOpen(false);
  };

  const usernameProps: UsernameProps = {
    username: "@nima2024",
    fontSize: "15px",
    fontWeight: "normal",
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #E2E8F0"
        borderRadius="10px"
        bg="white"
        p="10px"
        m="20px 0 20px 0px"
        maxW="75%"
      >
        <ProfileIcon boxSize={10} />
        <Input
          placeholder="Write something..."
          onClick={handleInputClick}
          ml="10px"
          border="1px solid #B4B4B8"
          bg="#EEEEEE"
          w="100%"
          h="40px"
        />
      </Box>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex display="flex" alignItems="center">
              <ProfileIcon boxSize={20} />
              <Text ml="10px">
                Nima Sherpa <Username {...usernameProps} />
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Textarea
              variant="flushed"
              placeholder="What do you want to talk about?"
            ></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePost}>
              Post
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPost;
