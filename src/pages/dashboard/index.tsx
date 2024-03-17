import { Flex, Box } from "@chakra-ui/react";

import ProfileCard from "../../components/Profile Card";
import NewPost from "../../components/New Post";
import PostList from "../../components/Post List";

const DashboardPage = () => {
  return (
    <Flex>
      <ProfileCard />
      <Box flex="1">
        <NewPost />
        <PostList />
      </Box>
    </Flex>
  );
};

export default DashboardPage;
