import { Text } from "@chakra-ui/react";
import { UsernameProps } from "../../types";

function Username({
  username = "@username",
  fontSize = "15px",
  fontWeight = "normal",
}: UsernameProps) {
  return (
    <Text
      as="em"
      fontSize={fontSize}
      fontWeight={fontWeight}
      mr="10px"
      letterSpacing="1px"
    >
      {username}
    </Text>
  );
}

export default Username;
