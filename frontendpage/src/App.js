import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import EmployeeDetials from './Components/EmployeeDetials';
import EmployeeList from './Components/EmployeeList';
import UpcomingHolidays from './Components/UpcomingHolidays';


function App() {
  return (
    <div className="app-container">
      <div className="left-side">
        Side
      </div>
      <div className="right-side">
        <div className="content">
          <Navbar />
          <EmployeeDetials />
          <div className="list-holidays">
            <EmployeeList />
            <UpcomingHolidays />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
