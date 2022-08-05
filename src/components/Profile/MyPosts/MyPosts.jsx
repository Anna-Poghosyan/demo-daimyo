import React from "react";
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControl";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostText" component={Textarea} placeholder = "Post message" validate={[required, maxLength10]}/>
        </div>
        <div>
          <button >Add Post</button>
        </div>
    </form>
   )
} 

const AddMessageFormRedux = reduxForm({form: 'ProfileAddMessageForm'})(AddNewPostForm)


const MyPosts = (props) => {   
  let postsElements = [...props.posts].reverse().map(p =>  <Post message ={p.message} key = {p.id} likesCount ={p.likeCount}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return( 
        <div className={classes.postsBlock}>
          My Posts
          <AddMessageFormRedux onSubmit = {onAddPost}/>
          <div className={classes.posts}>
          {postsElements}
          </div>
        </div>
    );
}


export default MyPosts;