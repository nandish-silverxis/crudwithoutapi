import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updatedata } from './Action'
import {useForm} from "react-hook-form"





export default function Edituser() {
    const { id } = useParams();
    const [userId, setUserId] = useState(-1)
    const[edituser,setEdituser]=useState(null);
    const navigate = useNavigate('')
    
    const dispatch = useDispatch();
    
    const{ register,setValue,formState:{errors},handleSubmit}=useForm();
    const users = useSelector((state)=>state.user.users)
    useEffect (()=>
    {
        console.log(id)
        const userdetail = users.find((user2)=> user2.id === id);
        console.log(userdetail)
        setEdituser(userdetail);
        if(userdetail){
            setValue("user_name",userdetail.user_name)
            setValue("email",userdetail.email)
            setValue("mobile",userdetail.mobile)
            setValue("dob",userdetail.dob)

        }
        

    },[id,users])

    useEffect(() => {
        setUserId(localStorage.getItem("id"))
    })

    
      

   

    const onSubmit =  (data) =>
    {
       console.log(data)
         
        data={...edituser, ...data}
        dispatch(updatedata(data));
        navigate('/')
    }
    

  return (

    <div>
    <div>
    <section >
    <div >
      
    <h1 >Edit user {parseInt(userId) + 1}</h1>
            
      
       <section className='container my-3 bg-dark w-50 text-light p-2'>
                            <form className="row g-1 p-2 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <label  className="form-label"><b>User_name:</b></label>
                            <input type="text" className="form-control" {...register("user_name",{required:true,pattern: /^[a-zA-Z0-9_]+$/i})} />
                            <span className='text-danger'>
                                {errors.user_name?.type==="required" && " Name is Required"}
                                {errors.user_name?.type==="pattern" && "Enter Please Valid Username "}
                            </span>
                            
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label"><b>Email:</b></label>
                            <input type="email"  className="form-control" {...register("email",{required:true,pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i})} />
                            <span className='text-danger'>
                                {errors.email?.type==="required" && " Email is Required"}
                                {errors.email?.type==="pattern" && "Enter Please Valid Email "}
                            </span>
                           
                        </div>

                        <div className="col-12 mt-4">
                            <label className="form-label"style={{marginRight:"450px"}}><b>Mobile No:</b></label>
                            <input type="number" className="form-control" {...register("mobile",{required:true,minLength:10,maxLength:12})} />
                            <span className='text-danger'>
                                {errors.mobile?.type==="required" && " Phone Number is Required"}
                                
                                
                            </span>
                           
                        </div>


                        <div className="col-12 mt-4">
                            <label  className="form-label" style={{marginRight:"450px"}}><b>Date_Of_Birth:</b></label>
                            <input type="date" className="form-control" {...register("dob",{required:true})}  />
                            <span className='text-danger'>
                                {errors.dob?.type==="required" && " Date of Birth is Required"}
                                
                            </span>
                        </div> 

                        
                        
                 
                   
                
                            

                            


                        
                        <div className="col-12 ">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                        </form>
       </section>
       
    </div>
    </section>
            </div>
            </div>
        
    
  )
}
