import "./SignIn.css"
import { FaGithub ,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function SignIn() {

  const[name , Setname] = useState()
  const[email, Setemail] = useState()
  const[password, Setpassword] = useState()
  const[confirmPassword, SetconfirmPassword] = useState()
  const navigate = useNavigate()

  const Submit = (e)=>{
    e.preventDefault()
    // console.log(name, email, password , confirmPassword,)
    axios.post("",{name,email,password,confirmPassword})
   .then(res=>{console.log(res)})
   .catch(err=>{console.log(err)});
    navigate("/Home")
  }


  return (
    <div className="SignIn-body">
      <div className="card">
        <input type="checkbox" id="chk" aria-hidden="true" name=""/>
        <div className="content">
          <div className="front">
            <div className="inner">
              <h2 className="SignIn-header">Log in</h2>
              <p className="hed">SignIn with</p>
              <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://github.com/Pratham-Gaikwad" target="_Pratham">
                  <FaGithub className="GitHub"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pratham-gaikwad-199829239" target="_Pratham">
                  <FaLinkedinIn className="LinkedIn"/>
                </a>
              </li>
             <li>
                <a href="https://www.instagram.com/_pratham_gaikwad_/" target="_Pratham">
                  <FaInstagram className="Instagram"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/Pratham-Gaikwad" target="_Pratham">
                  <FaTwitter className="Twitter"/>
                </a>
              </li> 
            </ul>
              </div>
              {/* <p className="hed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi voluptatem obcaecati sit odit eius officia quos iusto asperiores nesciunt ipsam minima omnis cumque, nam deserunt aliquid laborum consectetur nobis.</p> */}
              <form onSubmit={Submit}>
              <input type="text" name="txt" placeholder="Username" onChange={(e)=>Setname(e.target.value)}/>
              <input type="password" name="pswd" placeholder="password" onChange={(e)=>Setemail(e.target.value)}/>
              <label htmlFor="chk" aria-hidden="true">Register →</label>
              <button type="Submit" className="SignIn-btn">Login</button>
              </form>
            </div>
          </div>
 

          <div className="back">
            <div className="inner">
              <h2 className="SignIn-header">Register</h2>
              <p className="hed">Join us on Baatin by Registering</p>
              <form onSubmit={Submit}>
              <input type="text" name="txt" placeholder="Userame" onChange={(e)=>Setname(e.target.value)}/>
              <input type="email" name="email" placeholder="Email address" onChange={(e)=>Setemail(e.target.value)}/>
              <input type="password" name="pswd" placeholder="password"onChange={(e)=>Setpassword(e.target.value)}/>
              <input type="password" name="pswd" placeholder="Confirm password" onChange={(e)=>SetconfirmPassword(e.target.value)}/>
              <button type="Submit" className="SignIn-btn-back">Register</button>
              <label htmlFor="chk" aria-hidden="true">Back to login → </label>
             </form>
            </div>
          </div>


        </div>
      </div> 
    </div>
  )
}
