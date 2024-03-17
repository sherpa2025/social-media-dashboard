import { Text } from "@chakra-ui/react";
import { UsernameProps } from "../../types";

function Username({
  username = "@username",
  fontSize = "15px",
  fontWeight = "normal",
}: UsernameProps) {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      mr="10px"
      letterSpacing="1px"
    >
      <em>{username}</em>
    </Text>
  );
}

export default Username;
