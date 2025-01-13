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
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import photo from '../Components/userPhoto.jpg';
import { FaBell } from "react-icons/fa6";
import { app } from "../firebase"; // Import the Firestore instance
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import logo from '../Components/icon.jpg'; // Add your logo image path here

const Navbar = () => {
    const [name, setUsername] = useState('');
    const [error, setError] = useState(null);

    // Function to fetch username from Firestore
    const fetchUsername = async () => {
        try {
            const db = getFirestore(app);
            const docRef = doc(db, "faculty", "UHsZ0thvb9hrN7P3sUZf"); // Specify the document ID here
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setUsername(data.Name); // Assuming "Name" is the field in your Firestore document
            } else {
                console.log("No attendance data found for this user.");
            }
        } catch (error) {
            console.error("Error fetching attendance data: ", error);
            setError("Failed to fetch data");
        }
    };

    useEffect(() => {
        fetchUsername();
    }, []);

    return (
        <div className='Nav1'>
            <div className="Size">
                {/* Birthday Text */}
                <p className="birthday-text">
                    Happy Birthday<br />
                    {name ? `9 November ${name}` : 'Loading...'}
                </p>

                {/* Bell Icon */}
                <div className='bell'>
                    <FaBell />
                </div>

                {/* Logo Image */}
                <div className='logo'>
                    <img src={photo} alt="Logo" />
                </div>

                {/* Display error if fetching fails */}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Navbar;

