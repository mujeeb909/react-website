import React, { useState } from 'react';

export const Contact = () => {

  const [data, setData] = useState({
    fullname : "",
    email : "",
    mobile : ""
  })

  const inputEvent =(event) =>{
    const [name, value]= event.target;
    setData((prevData)=>{
      return {
        ...prevData, 
        [name]:value
      }
    })

  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(` My name is ${ data.fullname}. My Email is ${data.email} and my mobile number is ${data.mobile}`);
  }

  return (
    <>
    <div className="my-5">
      <h1 className='text-center'> Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Full Name" required/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter Your Email" required/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={inputEvent} placeholder="Enter Your Phone Number" required/>
              </div>
              
              <div className="col-12 my-3">
                <button className="btn btn-outline-primary" type='submit'>Submit</button>
              </div>
              
              
            </form>


        </div>
      </div>
    </div>
    
    </>
  )
}
