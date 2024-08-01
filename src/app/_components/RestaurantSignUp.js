import { useState } from "react"

const RestaurantSignUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [c_password,setC_password]=useState('');
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [contact,setContact]=useState('');

  const handleSignup=async ()=>{
    console.log(email,password,c_password,name,address,contact);
    let result = await fetch("http://localhost:3000/api/restaurants",{
      method:"POST",
      body:JSON.stringify({email,password,name,address,contact})
    }
    )
    result = await result.json();
    console.log(result);
  }
  return (
    <>
    <h2>Signup</h2>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Email id" className="input-feild"
          value={email} onChange={(event)=>setEmail(event.target.value)} />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Password" className="input-feild"
          value={password} onChange={(event)=>setPassword(event.target.value)} />
          </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Confirm Password" className="input-feild"
          value={c_password} onChange={(event)=>setC_password(event.target.value)} />
          </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Restaurant Name" className="input-feild"
          value={name} onChange={(event)=>setName(event.target.value)} />
          </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Address" className="input-feild"
          value={address} onChange={(event)=>setAddress(event.target.value)} />
          </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Conatct No." className="input-feild"
          value={contact} onChange={(event)=>setContact(event.target.value)} />
          </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>Sign Up</button>
          </div>
      </div>
    </>
  )
}

export default RestaurantSignUp