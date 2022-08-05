import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";
import App from "../App";
import { ReactDOM } from "react";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

it("new post should be added", () => {
  let action = addPostActionCreator("it-komosutra.com");
  let state = {
    posts: [
        {id:1, message:'Hi, how are you?', likeCount:1},
        {id:2, message:'It\'s my first post', likeCount:12}
      ],       
    profile: null,
    status: ""
      
  }
  let newStart = profileReducer(state, action);
  expect(newStart.posts.length).toBe(5);
  expect(newStart.posts[1].message).toBe("anna");
})