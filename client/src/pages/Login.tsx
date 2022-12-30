import React, { useState } from "react";
import '../login.css';
import background from '../assets/background.svg';
import line from '../assets/Line.svg';
import google from '../assets/google.png';

function Login() {

  const [feilds, setfeilds] = useState({
    username: '',
    password: ''
  });
  const handleInput = (e: { target: { name: any; value: any; }; }) =>{
    const name = e.target.name;
    const value = e.target.value;
    setfeilds({...feilds, [name] : value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(feilds.username);
    console.log(feilds.password);

  };
  return (
      <div>
        <form action="" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div className="background" ><img className="image" src={background}/></div>
        <div className="container">
        <div className="login-text neonText">LOGIN</div>
        <div className="button fill" style={{marginTop:'70px'}}><img src={google} style={{width:"20px", marginRight:'15px'}}/>Continue with Google</div>
        <div className="button"><input className="input" type="email" name="username" placeholder="Your Email" autoComplete="off" value={feilds.username} onChange={handleInput} /></div>
        <div className="button"><input className="input" type="password" name="password" placeholder="Password" autoComplete="off" value={feilds.password} onChange={handleInput} /></div>
        <button className="button login fill" type="submit" style={{zIndex: 2, borderRadius:'0', width: '10vw',border:'none'}}>
        <div className="button login fill" style={{position:"absolute",height:'48px',minWidth:'248px',width:"5vw", margin:'2px' ,borderRadius:'0', border:'none', backgroundColor:'#0e4f5e'}}><img style={{position:'absolute', zIndex:0}} src={line}/><div style={{zIndex:1}}>LOGIN</div></div></button>
        <div className="signup">Don’t have an account?<div style={{marginLeft:'10px',color:'#40E9F1'}}>Sign Up.</div></div>
        </div>
        </div>
        </form>
      </div>
  );
}

export default Login;
