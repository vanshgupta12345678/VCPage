// import React from 'react';
// import './Card.css';
// import logo from '../Components/icon.jpg';
// const Cards= () => {
//     return (<>
//         <div className='flex'>
//            <div className='Card1'>
// <p className='txt'>Employees<br/>50/50</p>
// <div className='logo' style={{textAlign:'center'}}>
//                     <img src={logo} alt="Logo" />
//                 </div>
//            </div>
//            <div className='Card2'>
//            <p className='txt'>Employee<br/>Attendance</p>
// <div className='logo' style={{textAlign:'center'}}>
//                     <img src={logo} alt="Logo" />
//                 </div>
//            </div>
//            <div   className='Card3'>
//             <div style={{display:'block',padding:'10px'}}>
//             <p style={{color:'white'}}>CheckIn</p>
//             <p style={{color:'white'}}>CheckOut</p><p style={{color:'white'}}>Leaves</p>
//             </div>

// <div style={{textAlign:'center',padding:'10px',color:'white'}}>
//                     <p  style={{fontSize:'14px'}} >10</p>
//                     <p  style={{fontSize:'14px'}} >10</p>
//                     <p  style={{fontSize:'15px'}} >1</p>
//                 </div>
//            </div>

//         </div>
//         </>
//     );
// };

// export default Cards;

// import React, { useEffect, useState } from "react";
// import { app } from "../firebase"; // Import the Firestore instance
// import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
// import "./Card.css";
// import logo from "../Components/icon.jpg";

// const Cards = () => {
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [facultyData, setFacultyData] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch the number of employees from Firestore on component mount
//   useEffect(() => {
//     const fetchTotalEmployees = async () => {
//       try {
//         const db = getFirestore(app);
//         const querySnapshot = await getDocs(collection(db, "faculty"));
//         try {
//             const docSnap = await getDocs(querySnapshot);
//             const data = docSnap.docs.map((doc) => ({
//               id: doc.id,
//               ...doc.data()
//             }));
//             setFacultyData(data);
//           } catch (error) {
//             setError("Failed to load faculty data.");
//             console.log(error);
//           }
//         setTotalEmployees(querySnapshot.size);
//       } catch (error) {
//         console.error("Error fetching data from Firestore: ", error);
//       }
//     };

//     fetchTotalEmployees();
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   return (
//     <>
//       <div className="flex">
//         <div className="Card1">
//           <p className="txt">
//             Employees
//             <br />
//             {totalEmployees}/50 {/* Display the number of employees */}
//           </p>
//           <div className="logo" style={{ textAlign: "center" }}>
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="Card2">
//           <p className="txt">
//             Employee
//             <br />
//             Attendance
//           </p>
//           <div className="logo" style={{ textAlign: "center" }}>
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="Card3">
//           <div style={{ display: "block", padding: "10px" }}>
//             <p style={{ color: "white" }}>CheckIn</p>
//             <p style={{ color: "white" }}>CheckOut</p>
//             <p style={{ color: "white" }}>Leaves</p>
//           </div>

//           <div style={{ textAlign: "center", padding: "10px", color: "white" }}>
//             <p style={{ fontSize: "14px" }}>10</p>
//             <p style={{ fontSize: "14px" }}>10</p>
//             <p style={{ fontSize: "15px" }}>1</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

import React, { useEffect, useState } from "react";
import { app } from "../firebase"; // Import the Firestore instance
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import "./Card.css";
import logo from "../Components/userPhoto2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [facultyData, setFacultyData] = useState([]);
  const [attendanceData, setAttendanceData] = useState({
    checkIn: 0,
    checkOut: 0,
    leaves: 0,
  });
  const [error, setError] = useState(null);

  const userId = "Pr3XnIy8GB4ynS4NBpHN";
  const userId2 = "sBUgTTi5AE6aJdoudDIB";

  // Fetch the number of employees from Firestore on component mount
  useEffect(() => {
    const fetchTotalEmployees = async () => {
      try {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "faculty"));
        try {
          const docSnap = await getDocs(querySnapshot);
          const data = docSnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFacultyData(data);
        } catch (error) {
          setError("Failed to load faculty data.");
          console.log(error);
        }
        setTotalEmployees(querySnapshot.size); // Get the number of employees
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };

    // Fetch attendance data for a specific user
    const fetchAttendanceData = async () => {
      try {
        const db = getFirestore(app);
        const docRef = doc(db, "faculty", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setAttendanceData({
            checkIn: data.checkIn || 0,
            checkOut: data.checkOut || 0,
            leaves: data.leaves || 0,
          });
        } else {
          console.log("No attendance data found for this user.");
        }
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
      }
    };

    fetchTotalEmployees();
    fetchAttendanceData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <div className="flex">
        <div className="Card1" >
          <p className="txt" style={{fontSize:'22px'}}>
            Employees
            <br />
            {totalEmployees}/50 {/* Display the number of employees */}
          </p>
          <div className="logo" style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "62.34px", height: "62.34px" }}
            />
          </div>
        </div>
        <div className="Card2">
          <p className="txt" style={{fontSize:'22px'}}>
            Employee
            <br />
            Attendance
          </p>
          <div
            className="logo"
            style={{
              textAlign: "center",
              backgroundColor: "white",
              padding: "10px",
              width: "62.34px",
              height: "62.34px",
              borderRadius: "50%",
            }}
          >
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{
                color: "white",
                backgroundColor: "#F66B2E",
                width: "33px",
                height: "33px",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div className="Card3" style={{fontSize:'16px'}}>
          <div style={{ display: "block", padding: "10px" }}>
            <p style={{ color: "white" }}>Check In</p>
            <p style={{ color: "white" }}>Check Out</p>
            <p style={{ color: "white" }}>Leaves</p>
          </div>

          <div style={{ textAlign: "center", padding: "10px", color: "white" }}>
            <p style={{ fontSize: "16px" }}>{attendanceData.checkIn}</p>
            <p style={{ fontSize: "16px" }}>{attendanceData.checkOut}</p>
            <p style={{ fontSize: "16px" }}>{attendanceData.leaves}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
