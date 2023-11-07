import React,{ useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {useForm} from "react-hook-form"
import { Navigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";


function Adduser() {

   
    const{ register, watch ,formState:{errors},handleSubmit}=useForm();
    const Navigate=useNavigate()
    
console.log(errors);
   
    const[formvalue,setFormvalue]=useState({user_name:'',email:'',mobile:'',password:'',confirmpassword:'',dob:'',Country:'',gender:'male',id: uuid(),})

    const dispatch = useDispatch();
   
          
    
    
  
    const onSubmit= async(data)=>
    {
        data = {...data, ...{id: uuid()}}
        dispatch({
            type : 'adddata', 
            payload :data 
           }) 
           Navigate("/")
        }
       

 






  
  return (
    <div className="container">
    <div className='row'>
    <h1>User Registration Form</h1>
       
       <section className='container my-2  bg-dark w-50 text-light p-4 '>
                            <form className="row g-1 p-2"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <label  className="form-label"><b>Username:</b></label>
                            <input type="text" className="form-control" {...register("user_name",{required:true,pattern: /^[a-zA-Z0-9_]+$/i})} />
                            <span className='text-danger'>
                                {errors.user_name?.type==="required" && " Name is Required"}
                                {errors.user_name?.type==="pattern" && "Enter Please Valid Username "}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label"><b>Email:</b></label>
                            <input type="text" {...register("email",{required:true,pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i})} className="form-control"/>
                            <span className='text-danger'>
                                {errors.email?.type==="required" && " Email is Required"}
                                {errors.email?.type==="pattern" && "Enter Please Valid Email "}
                            </span>
                        </div>
                        <div className="col-6">
                            <label  className="form-label"><b>Password:</b></label>
                            <input type="password"{...register("password",{required:true,minLength:6,maxLength:20,})} className="form-control"  />
                            <span className='text-danger'>
                                {errors.password?.type==="required" && " Password is Required"}
                                {errors.password?.type==="minLength" && "Enter Password is More then 6 Digits "}
                                {errors.password?.type==="maxLength" && "Enter Password is less then 20 Digits "}
                            </span>
                        </div>
                        <div className="col-6">
                            <label  className="form-label"><b>Confirm Password:</b></label>
                            <input type="password" className="form-control" {...register("confirmpassword", {required: true,validate: (val) => {if (watch('password') != val) {
                                                               return "Your passwords do no match";
                                                            }
                                                          },
                                                        })} />
                            <span className='text-danger'>
                                {errors.confirmpassword?.type==="required" && "Confirm Password is Required"}
                                {errors.confirmpassword?.type === "validate" && "Confirm Password doen't match"}
                            </span>
                        </div>

                        <div className="col-12">
                            <label className="form-label"style={{marginRight:"450px"}}><b>Mobile No:</b></label>
                            <input type="number" className="form-control" {...register("mobile",{required:true,minLength:10,maxLength:12})} />
                            <span className='text-danger'>
                                {errors.mobile?.type==="required" && " Phone Number is Required"}
                                
                                
                            </span>
                        </div>


                        <div className="col-12 mb-4">
                            <label  className="form-label" style={{marginRight:"450px"}}><b>Date Of Birth:</b></label>
                            <input type="date" className="form-control" {...register("dob",{required:true})}  />
                            <span className='text-danger'>
                                {errors.dob?.type==="required" && " Date of Birth is Required"}
                                
                            </span>
                        </div>
                        <div className="col-12 ">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        </form>
       </section>
    </div>
    </div>
  )
}

export default Adduser
