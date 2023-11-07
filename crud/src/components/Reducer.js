import { combineReducers } from "redux";
const initialstate = {
    users: [] 

  };

const userreducer = (state=initialstate ,action)=>{

     if(action.type ==='adddata')
     {
        return {
            users: [action.payload, ...state.users]
          };
   }
   else if(action.type === "updatedata")
   {
    const updateuser= action.payload
    const updateduser= state.users.map((user1)=>
    {
        if(user1.id === updateuser.id){
            return updateuser
        }
        else{
            return user1
        }
    })
    return {users: updateduser};

   }

   else if(action.type === "removedata")
    {
        return{
        users: state.users.filter((user1)=>{
            return user1.id !== action.payload
       
        })
        }
    } ;
   return state;
}
//  const usereditreducer = (state=edit_initialstate,action)=>
//  {
//     if(action.type === "editdata")
//     {
//         return {...state, usersedit : action.payload};
//     }
 
//  return state;
   
// }
const reducers = combineReducers({
    user: userreducer,
    
})
export default reducers;