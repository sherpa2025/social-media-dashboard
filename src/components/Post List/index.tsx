import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "../../app/postSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { format, parse } from "date-fns";
import ProfileIcon from "../Profile Icon";
import Username from "../username";
import { MdDelete, MdEdit } from "react-icons/md";
import { RootState } from "../../app/store";
import EditPostModal from "../Post Update/index";

const PostList = () => {
  const postList = useSelector((state: RootState) => state.post.postList);
  const dispatch = useDispatch();

  const sortedPostList = postList.slice().sort((a, b) => {
    return (
      new Date(b.dateOfCreation).getTime() -
      new Date(a.dateOfCreation).getTime()
    );
  });

  const formatDate = (dateString: string) => {
    try {
      const date = parse(dateString, "yyyy-MM-dd", new Date());
      return format(date, "MMMM d, yyyy");
    } catch (error) {
      console.error(`Error formatting date: ${error}`);
      return "Invalid Date";
    }
  };

  const handleDeletePost = (postId: string) => {
    dispatch(removePost({ id: postId }));
  };

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleEditPost = (postId: string) => {
    setSelectedPostId(postId);
  };

  return (
    <>
      {sortedPostList.map((post) => (
        <Card key={post.id} maxW="75%" mt="20px">
          <CardHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap="4" alignItems="center">
                <ProfileIcon boxSize={10} />
                <Box>
                  <Heading size="sm">{post.name}</Heading>
                  <Flex alignItems="center">
                    <Username
                      username={post.username}
                      fontSize="15px"
                      fontWeight="normal"
                    />
                    <Text ml="2" color="gray.500">
                      • {formatDate(post.dateOfCreation)}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<BsThreeDotsVertical />}
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                <MenuList>
                  <MenuItem
                    icon={<MdEdit />}
                    onClick={() => handleEditPost(post.id)}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    icon={<MdDelete />}
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody p="1px 20px 20px 20px">
            <Text>{post.postContent}</Text>
          </CardBody>
        </Card>
      ))}
      {selectedPostId && (
        <EditPostModal
          postId={selectedPostId}
          onClose={() => setSelectedPostId(null)}
        />
      )}
    </>
  );
};

export default PostList;
