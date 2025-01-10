import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import "./EmployeeList.css";

function EmployeeList() {
  const [facultyData, setFacultyData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const db = getFirestore(app);
    const docRef = collection(db, "faculty");
    try {
      const docSnap = await getDocs(docRef);
      const data = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFacultyData(data);
    } catch (error) {
      setError("Failed to load faculty data.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="employee-list">
        <h1>Employee List</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Show error message if there's any */}
        <div>
          {facultyData.length === 0 ? (
            <p>No faculty data available.</p>
          ) : (
            <table>
              <thead>
                <tr className="table-row">
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((faculty) => (
                  <tr key={faculty.id} className="table-row">
                    <td>{faculty.Name}</td>
                    <td>{faculty.EmployeeId}</td>
                    <td>{faculty.Profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
