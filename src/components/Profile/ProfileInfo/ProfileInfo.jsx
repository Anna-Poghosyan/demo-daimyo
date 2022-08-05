import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <Preloader/>
  }
    return(
      <div>
        <div className={classes.discriptionBlock}>
          <img src = {profile.photos.small != null ? profile.photos.small :userPhoto}/> 
          <ProfileStatusWithHooks  status = {status} updateStatus = {updateStatus}/>
          </div>
       
      </div>

    );
}
export default ProfileInfo;