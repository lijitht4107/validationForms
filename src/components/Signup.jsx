import React, { useState } from 'react'
import Header from './Header'

const Signup = () => {
    const [register,setRegister]=useState({name:'',email:'',age:'',password:''})
    const [profileImg,setProfileImg]=useState(null)
    const [addProfileImg,setAddProfileImg]=useState('')
    const AddProfileImg =(e)=>{
        setProfileImg(e.target.files[0]);
        e.target.files[0]?setAddProfileImg(URL?.createObjectURL(e.target.files[0])):setAddProfileImg(null)
    }
    const handleSignup =(event) =>{
      event.preventDefault()
      alert(`name is ${register.name} , ande mail Id ${register.email}, his/her age ${register.age}, password:${register.password}`)
    }
  return (
    <div>
        
      <Header/>
        <div  className='container' >
            <h1 className='regform-heading'>Regisration form</h1>
     <div className='register-form py-5' action="">
        
        <input className='file-uploader' type="file" accept='image/jpeg, image/png, image/jpg' id='input-file-pic' onChange={AddProfileImg}/>
        {addProfileImg && (
            <img className='profile-logo' src={addProfileImg} alt="" width={"100px"} height={"100px"} />
          )}
        
        <label className='upload-img' htmlFor="input-file-pic">update image</label>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={register.name} onChange={e=>{setRegister({...register,name:e.target.value})}} placeholder='Name'/>
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={register.email} onChange={e=>{setRegister({...register,email:e.target.value})}} placeholder='Email'/>
        <label htmlFor="">Age</label>
        <input type="number" name="age" id=""  value={register.age} onChange={e=>{setRegister({...register,age:e.target.value})}} placeholder='Age'/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" value={register.password} onChange={e=>{setRegister({...register,password:e.target.value})}} placeholder='Password'/>
        <button type="submit" onClick={handleSignup}>Register</button>
     </div>
     </div>
    </div>
    
  )
}

export default Signup
