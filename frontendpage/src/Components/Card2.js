import React, { useEffect, useState } from 'react';
import './Card.css';
import './Card2.css';
import { FaCalendarAlt } from "react-icons/fa";
import { app } from '../firebase';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';

const Card2 = () => {
    // State variables to store fetched data
    const [employeeList, setEmployeeList] = useState([]);
    const [holidays, setHolidays] = useState([]);
    const [error, setError] = useState(null); 

    // Fetch data from Firebase Realtime Database on component mount
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
          setEmployeeList(data);
        } catch (error) {
          setError("Failed to load faculty data.");
          console.log(error);
        }
    }

    return (
        <>
            <div className="card-container">
                <div className='box'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ fontSize: '22px' }}>Employee List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td style={{ textAlign: 'center' }}>Employee ID</td>
                                <td>Profile</td>
                            </tr>
                            {employeeList.map((faculty, index) => (
                                <tr key={index}>
                                    <td>{faculty.Name}</td>
                                    <td style={{ textAlign: 'center' }}>{faculty.EmployeeID}</td>
                                    <td style={{ textAlign: 'right', paddingLeft: '4rem' }}>{faculty.Profile}</td>
                                </tr>
                            ))}
                            <tr>
                                <td style={{ textAlign: 'center' }} colSpan="3" >
                                    View All Employees
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='box2' >
                    <table>
                        <thead>
                            <tr style={{ display: 'flex' }}>
                                <th style={{ fontSize: '22px' }}>Up Coming Holidays</th>
                                <td style={{ textAlign: 'cent', marginLeft: '20px' }} colSpan="3" >
                                    View All
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div className='date' style={{ display: 'flex' }}>
                        <div style={{ color: 'white', fontSize: '30px', padding: '10px' }}>
                            <FaCalendarAlt />
                        </div>
                        <div style={{ marginTop: '10px',color:'white'}}>
                            Diwali<br/>Mon 20 November 2024
                        </div>
                    </div>
                    <div className='date' style={{ display: 'flex' }}>
                        <div style={{ color: 'white', fontSize: '30px', padding: '10px' }}>
                            <FaCalendarAlt />
                        </div>
                        <div style={{ marginTop: '10px',color:'white' }}>
                            Diwali<br/>Mon 20 November 2024
                        </div>
                    </div><div className='date' style={{ display: 'flex' }}>
                        <div style={{ color: 'white', fontSize: '30px', padding: '10px' }}>
                            <FaCalendarAlt />
                        </div>
                        <div style={{ marginTop: '10px',color:'white' }}>
                            Diwali<br/>Mon 20 November 2024
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card2;


// import React, { useEffect, useState } from 'react';
// import './Card.css';
// import './Card2.css';
// import { FaCalendarAlt } from "react-icons/fa";
// import { app } from '../firebase';
// import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';


// const Card2 = () => {
//     // State variables to store fetched data
//     const [employeeList, setEmployeeList] = useState([]);
//     const [holidays, setHolidays] = useState([]);
//     const [error, setError] = useState(null); 

//     // Fetch data from Firebase Realtime Database on component mount
//     useEffect(() => {
//         getData();
//         holiday();
//     }, []);

//     const getData = async () => {
//         const db = getFirestore(app);
//         const docRef = collection(db, 'faculty');
//         try {
//           const docSnap = await getDocs(docRef);
//           const data = docSnap.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data()
//           }));
//           setEmployeeList(data);
//         } catch (error) {
//           setError("Failed to load faculty data.");
//           console.log(error);
//         }
//     }

//     const holiday = async () => {
//         const db = getFirestore(app);
//         const docRef = collection(db, 'faculty');
//         try {
//           const docSnap = await getDocs(docRef);
//           const data = docSnap.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data()
//           }));
//           setEmployeeList(data);
//         } catch (error) {
//           setError("Failed to load faculty data.");
//           console.log(error);
//         }
//     }

//     return (
//         <>
//             <div className="card-container">
//                 <div className='box'>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th style={{ fontSize: '22px' }}>Employee List</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Name</td>
//                                 <td style={{ textAlign: 'center' }}>Employee ID</td>
//                                 <td>Profile</td>
//                             </tr>
//                             {employeeList.map((faculty, index) => (
//                                 <tr key={index}>
//                                     <td>{faculty.Name}</td>
//                                     <td style={{ textAlign: 'center' }}>{faculty.EmployeeID}</td>
//                                     <td style={{ textAlign: 'right', paddingLeft: '4rem' }}>{faculty.Profile}</td>
//                                 </tr>
//                             ))}
//                             <tr>
//                                 <td style={{ textAlign: 'center' }} colSpan="3" >
//                                     View All Employees
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className='box2'>
//                     <table>
//                         <thead>
//                             <tr style={{ display: 'flex' }}>
//                                 <th style={{ fontSize: '22px' }}>Up Coming Holidays</th>
//                                 <td style={{ textAlign: 'cent', marginLeft: '20px' }} colSpan="3" >
//                                     View All
//                                 </td>
//                             </tr>
//                         </thead>
//                     </table>
//                     {holidays.map((holiday, index) => (
//                         <div className='date' style={{ display: 'flex' }} key={index}>
//                             <div style={{ color: 'white', fontSize: '30px', padding: '10px' }}>
//                                 <FaCalendarAlt />
//                             </div>
//                             <div style={{ marginTop: '10px', color: 'white' }}>
//                                 {holiday.name}<br />{holiday.date}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Card2;
