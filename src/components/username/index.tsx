import { Text } from "@chakra-ui/react";
import { UsernameProps } from "../../types";

function Username({ username, fontSize, fontWeight }: UsernameProps) {
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
