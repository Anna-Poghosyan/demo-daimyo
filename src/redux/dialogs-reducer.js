const SEND_MESSAGE ='SEND-MESSAGE';

let initialState ={
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
    ]

  }
const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
            case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                
                messages: [...state.messages, {id:6, message: body}],
            };              
            default:
                    return state;
    }
}

  
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})
 export default dialogsReducer;