// import './EmployeeDetials.css'
// import React from 'react';

// function EmployeeDetials() {
//   return (
//     <>
//     <div className="employee-details">
//         <div className='employees'>
//             <div className='employees-data'>
//                 <h3>Employees</h3>
//                 <p>50/55</p>
//             </div>
//             <div className='employees-photo'>
//                 <i class="fas fa-users"></i>
//             </div>
//         </div>
//         <div className='employee-attendance'>
//             <div className='attendence-data'>
//                 <h3>Employee</h3>
//                 <p>Attendance</p>
//             </div>
//             <div className='attendence-photo'>
//                 <i class="fas fa-users"></i>
//             </div>
//         </div>
//         <div className='employee-leave'>
//             <div className='employees-leaves-data'>
//                 <div className='check-in'>
//                     <h3>Check In</h3>
//                     <p>10</p>
//                 </div>
//                 <div className='check-in'>
//                     <h3>Check In</h3>
//                     <p>10</p>
//                 </div>
//                 <div className='check-in'>
//                     <h3>Check In</h3>
//                     <p>10</p>
//                 </div>
//             </div>
//             {/* <div className='employees-photo'>
//                 <i class="fas fa-users"></i>
//             </div> */}
//         </div>
//     </div>
//     </>
//   )
// }

// export default EmployeeDetials

import './EmployeeDetials.css';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';

function EmployeeDetails() {
    const [facultyData, setFacultyData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);  // State for error handling

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const db = getFirestore(app);
    const docRef = collection(db, 'faculty');
    try {
      const docSnap = await getDocs(docRef);
      const data = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setFacultyData(data);
    } catch (error) {
      setError("Failed to load faculty data.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="employee-details">
        <div className="employees">
          <div className="employees-data">
            <h3>Employees</h3>
            <p>{facultyData.length}</p>
          </div>
          <div className="employees-photo">
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className="employee-attendance">
          <div className="attendance-data">
            <h3>Employee</h3>
            <p>Attendance</p>
          </div>
          <div className="attendance-photo">
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className="employee-leave">
          <div className="employees-leaves-data">
            <div className="check-in">
              <h3>Check In</h3>
              <p>10</p>
            </div>
            <div className="check-in">
              <h3>Check Out</h3>
              <p>10</p>
            </div>
            <div className="check-in">
              <h3>Leaves</h3>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
