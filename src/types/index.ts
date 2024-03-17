export interface ProfileIconProps {
  boxSize?: number | string;
}

export interface UsernameProps {
  username: string;
  fontSize: number | string;
  fontWeight: number | string;
}

export type Post = {
  id: string;
  name: string;
  username: string;
  dateOfCreation: string;
  postContent: string;
};
