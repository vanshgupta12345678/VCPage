<<<<<<< HEAD
// import React, { useState } from 'react'
// import './Navbar.css'

// const Navbar = () => {
    
//   return (
//     <>
//     <div className="navbar">
//         <p className='text'>Happy Birthday<br/> 9 November Name</p> 
//         <div className='icon-photo'>
//             <div className='icon'>
//                 <i class="fas fa-bell"></i>
//             </div>
//             <div className='photo'>
                
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p className="text">Happy Birthday<br/> 9 November Name</p> 
        <div className="icon-photo">
          <div className="icon">
            <i className="fas fa-bell"></i>
          </div>
          <div className="photo"></div>
        </div>
      </div>
    </>
  );
=======
// import React from 'react';
// import './Navbar.css';
// import { FaBell } from "react-icons/fa6";

// const Navbar = () => {
//     return (
//         <div className='Nav1'>
//             <div className="Size">
//                 {/* Birthday Text */}
//                 <p className="birthday-text">Happy Birthday<br />9 November Vansh Gupta</p>

//                 {/* Bell Icon */}
//                 <div className='bell'>
//                     <FaBell />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React from 'react';
import './Navbar.css';
import { FaBell } from "react-icons/fa6";
import logo from '../Components/icon.jpg'; // Add your logo image path here

const Navbar = () => {
    return (
        <div className='Nav1'>
            <div className="Size">
                {/* Birthday Text */}
                <p className="birthday-text">Happy Birthday<br />9 November Vansh Gupta</p>

                {/* Bell Icon */}
                <div className='bell'>
                    <FaBell />
                </div>

                {/* Logo Image */}
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </div>
    );
>>>>>>> 3963127ac2eea7d2f65983ea0a67a489057dfc94
};

export default Navbar;
