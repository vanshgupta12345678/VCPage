import React from 'react';
import './Card.css';
import logo from '../Components/icon.jpg';
const Cards= () => {
    return (
        <div className='flex'>
           <div className='Card1'>
<p className='txt'>Employees<br/>50/50</p>
<div className='logo' style={{textAlign:'center'}}>
                    <img src={logo} alt="Logo" />
                </div>
           </div>
           <div className='Card2'>
           <p className='txt'>Employee<br/>Attendance</p>
<div className='logo' style={{textAlign:'center'}}>
                    <img src={logo} alt="Logo" />
                </div>
           </div>
           <div   className='Card3'>
            <div style={{display:'block',padding:'10px'}}>
            <p style={{color:'white'}}>CheckIn</p>
            <p style={{color:'white'}}>CheckOut</p><p style={{color:'white'}}>Leaves</p>
            </div>
           
<div style={{textAlign:'center',padding:'10px',color:'white'}}>
                    <p  style={{fontSize:'20px'}} >10</p>
                    <p  style={{fontSize:'20px'}} >10</p>
                    <p  style={{fontSize:'20px'}} >1</p>
                </div>
           </div>
        </div>
    );
};

export default Cards;
