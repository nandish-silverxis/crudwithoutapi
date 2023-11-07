import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeuser } from "./Action";







function Userdata() {

  const[userdata,setUserdata]=useState([]);
  const users = useSelector((state)=> state.user.users)
  const dispatch = useDispatch()

  
console.log(users)

  
    

   

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">

          <Link to="/adduser" className="btn btn-warning"> Add New User </Link>
            <form className="form-inline my-2 my-lg-0" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
              <div className="d-grid d-md-flex justify-content-md-end mt-3 mb-3">
                
              </div>
            <table className="table table-bordered nanadish table-striped">
              <thead>
               
                <tr>
                  <th>Sr.no</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Date Of Birth</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
              users.map( (value,i)=>(
                  <tr key={value.id} >
                    <td >{i+1}</td>
                    <td >{value.user_name}</td>
                    <td >{value.email}</td>
                    <td >{value.mobile}</td>
                    <td >{value.dob}</td>
                    <td>
                      <Link className="btn" to={"/Edituser/"+value.id }
                      onClick={() => localStorage.setItem("id", i)}>Edit</Link>

                      
                      <button type="button" 
                      onClick={()=> dispatch(removeuser(value.id))}
                      >Delet</button>
                      
                    </td>
                  </tr>
                  ))
              }
              </tbody>
            </table>
           
            


          </div>
        </div>
    </div>
  )
  
}

export default Userdata;
