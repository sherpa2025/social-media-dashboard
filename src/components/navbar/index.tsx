import { Box, Flex } from "@chakra-ui/react";
import ProfileIcon from "../Profile Icon";
import appIcon from "../../assets/App Icon.svg";
import Username from "../username";
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
          <Flex alignItems="center" justifyContent="space-between">
            <Username username="@nima2024" fontSize="17px" fontWeight="bold" />
            <ProfileIcon boxSize={10} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
