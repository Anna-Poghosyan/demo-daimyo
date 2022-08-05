import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;