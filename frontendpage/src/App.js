import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards.js'
// import Card2 from './Components/Card2.js'
function App() {
  return (
    <>    <Navbar/> 
< Sidebar/>
   <Cards/>
   {/* <Card2/> */}
  
      
    </>
>>>>>>> 3963127ac2eea7d2f65983ea0a67a489057dfc94
  );
}

export default App;
