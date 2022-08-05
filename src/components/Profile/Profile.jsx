import React from "react";
import classes from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
  console.log(props,448);
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} status = {props.status} updateStatus ={props.updateStatus} />
      <MyPostsContainer />
    </div>

  );
}
export default Profile;