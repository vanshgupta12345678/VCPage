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
};

export default Navbar;
