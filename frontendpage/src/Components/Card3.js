// import React from "react";
// import './Card3.css';
// import logo from '../Components/icon.jpg';

// const Card3 = () => {
//     return (
//         <div className="card-container">
//             <div className="Crad3">
//                 <div>
//                     DIv1
//                 </div>
//             </div>

//             <div className="card4">
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <h3 style={{ paddingTop: '5px', marginLeft: '10px' }}>New Joiner Candidate</h3>
//                     <p style={{ marginRight: '10px', color: '#006EBE', borderBottom: '1px solid black' }}>
//                         View All
//                     </p>
//                 </div>
//                 {[...Array(3)].map((_, index) => (
//                     <div className="color" key={index} style={{ marginTop: index > 0 ? '20px' : '0' }}>
//                         <div className='logo'>
//                             <img src={logo} alt="Logo" />
//                             <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
//                                 <p style={{marginTop:'20px'}}>DiannaRusael<br />ATSID1234</p>

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Card3;

import React, { useState, useEffect } from "react";
import "./Card3.css";
import logo from "../Components/userPhoto3.png";
import { app } from "../firebase"; // Import the Firestore instance
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const Card3 = () => {
  const [candidates, setCandidates] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to format date as 'dd-month_name-yyyy'
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two-digit day
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Fetch candidates data from Firebase
  const fetchCandidates = async () => {
    try {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "faculty"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the fetched candidates data to state
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates data: ", error);
    }
  };

  // Sort candidates by Joining Date
  const sortCandidates = (order) => {
    const sortedCandidates = [...candidates].sort((a, b) => {
      const dateA = a.Joining ? new Date(a.Joining.seconds * 1000) : new Date();
      const dateB = b.Joining ? new Date(b.Joining.seconds * 1000) : new Date();

      if (order === "asc") {
        return dateA - dateB; // Ascending order (earliest date first)
      } else {
        return dateB - dateA; // Descending order (latest date first)
      }
    });
    setCandidates(sortedCandidates);
  };

  // Effect to fetch data when the component mounts
  useEffect(() => {
    fetchCandidates(); // Fetch data from Firestore
  }, []);

  // Effect to sort candidates when sortOrder changes
  useEffect(() => {
    if (candidates.length > 0) {
      sortCandidates(sortOrder);
    }
  }, [sortOrder, candidates]);

  return (
    <div className="card-container">
      <div className="Crad3">
        
      </div>

      <div className="card4">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ paddingTop: "5px", marginLeft: "10px" }}>
            New Joiner Candidate
          </h3>
          <div>
            <p
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              style={{
                marginRight: "10px",
                color: "#006EBE",
                borderBottom: "1px solid #006EBE",
                cursor: "pointer",
              }}
            >
              View All 
            </p>
          </div>
        </div>
        {candidates.map((faculty, index) => (
          <div
            className="color"
            key={index}
            style={{ marginTop: index > 0 ? "20px" : "0" }}
          >
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ marginTop: "20px" }}>
                  <span>{faculty.Name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {faculty.Joining && (
                    <span>{formatDate(faculty.Joining)}</span>
                  )}
                  <br />
                  ID - {faculty.EmployeeID}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;


