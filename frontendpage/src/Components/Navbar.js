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
};

export default Navbar;
