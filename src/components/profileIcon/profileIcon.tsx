import { Image } from "@chakra-ui/react";
import profile from "../../assets/Profile Icon.png";
import { ProfileIconProps } from "../../types/index";

function ProfileIcon({ boxSize }: ProfileIconProps) {
  return (
    <Image
      src={profile}
      alt="Profile Icons"
      boxSize={boxSize}
      borderRadius="full"
      objectFit="cover"
    />
  );
}

export default ProfileIcon;
