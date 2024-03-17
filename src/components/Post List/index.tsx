import { useSelector } from "react-redux";
import { getPostList } from "../../app/postSlice";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { format, parse } from "date-fns";
import ProfileIcon from "../Profile Icon";
import Username from "../username";

const PostList = () => {
  const postList = useSelector(getPostList);

  const sortedPostList = postList.slice().sort((a, b) => {
    return (
      new Date(b.dateOfCreation).getTime() -
      new Date(a.dateOfCreation).getTime()
    );
  });

  const formatDate = (dateString: string) => {
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "MMMM d, yyyy");
  };

  return (
    <>
      {sortedPostList.map((post) => (
        <Card key={post.id} maxW="75%" mt="20px">
          <CardHeader>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <ProfileIcon boxSize={10} />
                <Box>
                  <Heading size="sm">{post.name}</Heading>
                  <Flex>
                    <Username
                      username={post.username}
                      fontSize="15px"
                      fontWeight="normal"
                    />
                    <Text>• {formatDate(post.dateOfCreation)}</Text>
                  </Flex>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody p="1px 20px 20px 20px">
            <Text>{post.postContent}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default PostList;
