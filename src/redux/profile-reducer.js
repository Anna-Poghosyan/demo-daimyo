import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
 
let initialState = {
    posts: [
        {id:1, message:'Hi, how are you?', likeCount:1},
        {id:2, message:'It\'s my first post', likeCount:12}
      ],       
    profile: null,
    status: ""
      
  }
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
          let newPost = {
          id: 5,
          message: action.newPostText,
          likeCount: 1
        }; 
        let stateCopy = 
        {
          ...state,
          posts : [...state.posts, newPost],
          newPostText: ""
        };
        return stateCopy;
      }
        case SET_STATUS: {
          let stateCopy = {
            ...state,
            status: action.status,
          };
        return stateCopy;
        }
        case SET_USER_PROFILE:{
          return {...state, profile: action.profile}
        }
        default:
            return state;
    }
    
      
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async(dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async(dispatch) => {
 const response = await profileAPI.getStatus(userId);   
  dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async(dispatch) => {
 const response = await profileAPI.updateStatus(status);
     if(response.data.resultCode === 0){ 
  dispatch(setStatus(status));
     }
}



export default profileReducer;