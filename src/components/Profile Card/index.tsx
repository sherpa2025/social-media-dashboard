import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  CardFooter,
  Divider,
  Flex,
} from "@chakra-ui/react";

import ProfileIcon from "../../components/Profile Icon";

import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import style from "./profile.module.css";
import { GiSpikedDragonHead } from "react-icons/gi";

function ProfileCard() {
  return (
    <Box flex="1" m={5} maxW="250px">
      <Card maxW="sm">
        <CardBody>
          <ProfileIcon boxSize={120} />
          <Stack mt="6" spacing="3">
            <Flex alignItems="center">
              <Heading size="md" mr="2">
                Nima Sherpa |
              </Heading>
              <GiSpikedDragonHead size={20} />
            </Flex>

            <Text>
              "Be kind whenever possible. It is always possible." - His Holiness
              the 14th Dalai Lama
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter p="10px">
          <a href="https://github.com/sherpa2025" target="_blank">
            <Image
              src={Github}
              alt="GitHub"
              className={style["footer-image"]}
            />
          </a>
          <a href="https://www.linkedin.com/in/nimadorjee/" target="_blank">
            <Image
              src={LinkedIn}
              alt="LinkedIn"
              className={style["footer-image"]}
            />
          </a>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default ProfileCard;
