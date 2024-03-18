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
import { useAppDispatch } from "../../app/hooks";
import { addPost } from "../../app/postSlice";
import { v4 as uuidv4 } from "uuid";

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const dispatch = useAppDispatch();

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handlePost = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    dispatch(
      addPost({
        id: uuidv4(),
        name: "Nima Sherpa",
        username: "@nima2024",
        dateOfCreation: formattedDate,
        postContent: postContent,
      })
    );
    setIsOpen(false);
    setPostContent("");
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
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
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
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
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
