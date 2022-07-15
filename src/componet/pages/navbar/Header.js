import React from 'react'
import mylogo from './logo/mylogo.jpg'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
           <Link to='/'>
           <img className='mylogo' src={mylogo} alt=""/>
           </Link>
          
               <div className='navitem'>
              <div className='searchform'>
              <input className='mysearchinput' type='text'/>
                <input className='searchsubmit' type='submit'/>
              </div>
            <Link to="/login">
            <li>Login</li>
            </Link>
             <li>About us</li>
             <li>About us</li>
               </div>
              
                {/* <div className='navslink'> */}
               
                {/* </div> */}
    </div>
  )
}

export default Header