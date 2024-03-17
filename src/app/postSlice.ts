import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../types";

type initialStateType = {
  postList: Post[];
};

const postList: Post[] = [
  {
    id: uuidv4(),
    name: "Nima Sherpa",
    username: "@nima2024",
    dateOfCreation: "2023-03-17",
    postContent: "This is my first post!",
  },
  {
    id: uuidv4(),
    name: "Nima Sherpa",
    username: "@nima2024",
    dateOfCreation: "2024-03-17",
    postContent: "Hello World!",
  },
  {
    id: uuidv4(),
    name: "Nima Sherpa",
    username: "@nima2024",
    dateOfCreation: "2024-03-16",
    postContent: "This is my second post!",
  },
];

const initialState: initialStateType = {
  postList,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.postList.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, name, username, dateOfCreation, postContent } =
        action.payload;

      state.postList = state.postList.map((post) =>
        post.id === id
          ? { ...post, name, username, dateOfCreation, postContent }
          : post
      );
    },
    removePost: (state, action: PayloadAction<{ id: string }>) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

export const { addPost, updatePost, removePost } = postSlice.actions;
export const getPostList = (state: RootState) => state.post.postList;

export default postSlice.reducer;
