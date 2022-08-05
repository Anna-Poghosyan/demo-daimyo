import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

 let store = {
    _state : {

      profilePage:{
        posts: [
            {id:1, message:'Hi, how are you?', likeCount:1},
            {id:2, message:'It\'s my first post', likeCount:12}
          ],       
        newPostText: "kot begemont"
          
      },
      dialogsPage:{
        dialogs: [
            {id: 1, name: "Anna"},
            {id: 2, name: "Gevorg"},
            {id: 3, name: "Gayane"},
            {id: 4, name: "Armine"},
            {id: 5, name: "Hayk"},
            {id: 6, name: "Sose"},
            {id: 7, name: "Luse"}
        ] ,
      
        messages : [
            {id: 1, message:"Hi"},
            {id: 2, message:"This is a wonderful life"},
            {id: 3, message:"anything is possible"},
            {id: 4, message:"anything is possible"},
            {id: 5, message:"anything is possible"},
            {id: 6, message:"anything is possible"},
            {id: 7, message:"anything is possible"}
        ],
        newMessageBody :''

      }
        
  },
  _callSubscriber() {
    console.log("state was changed")
  },
  getState() {
    
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
},
 
  dispatch (action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}


  export default store;
  window.store = store;