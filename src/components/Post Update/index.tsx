import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../app/postSlice";
import { RootState } from "../../app/store";

interface EditPostModalProps {
  postId: string;
  onClose: () => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({ postId, onClose }) => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) =>
    state.post.postList.find((p) => p.id === postId)
  );

  const [editedPostContent, setEditedPostContent] = useState(
    post?.postContent || ""
  );

  const handleSaveChanges = () => {
    if (post) {
      dispatch(
        updatePost({
          ...post,
          postContent: editedPostContent,
        })
      );
      onClose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalBody>
          <Textarea
            value={editedPostContent}
            onChange={(e) => setEditedPostContent(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSaveChanges}>
            Save Changes
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPostModal;
