export const adddata = (data) =>{
   return (dispatch)=>
   {
    dispatch({
        type:'adddata',
        payload: data
    })
   }
}

export const updatedata = (user1) =>
{
    console.log(user1);
    return(dispatch)=>
    {
        dispatch({
            type:"updatedata",
            payload: user1
        })
    }
}

export const removeuser = (id) =>
{
    return(dispatch)=>
    {
        dispatch({
            type:"removedata",
            payload:id
        })
    }
}