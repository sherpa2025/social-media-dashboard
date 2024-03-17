import { Box, Flex } from "@chakra-ui/react";
import ProfileIcon from "../profileIcon/profileIcon";
import appIcon from "../../assets/App Icon.svg";
const Navbar = () => {
  return (
    <Box
      bg="white"
      boxShadow="md"
      py={4}
      px={6}
      zIndex="sticky"
      top={0}
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <img
            src={appIcon}
            alt="App Icon"
            style={{ display: "block", width: "45px", height: "45px" }}
          />
        </Box>
        <Box>
          <ProfileIcon boxSize={12} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
