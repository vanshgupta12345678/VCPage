import React, { useState } from 'react';
import './Sidebar.css';
// import { MdDashboard } from "react-icons/md";
import { ImParagraphLeft } from "react-icons/im";
import { FaListOl } from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDomainVerification } from "react-icons/md";
// import { FaCalendarAlt } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { MdCalculate } from "react-icons/md";
import { TbBrandLetterboxd } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the sidebar visibility
    };

    return (
        <>
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="txtdiv">
                    <p className="text1">Logo</p>
                </div>
                <button className="Button" style={{ border: 'none', display: 'flex', marginLeft: '4px' }}>
                    <MdDashboard className='i1' />
                    <span style={{ textAlign: 'center', marginTop: '14px' }} className='butntxt'>Dashboard</span>
                </button>
                <div >



                    <div className="Button2" style={{ display: 'flex', marginLeft: '4px' }}>
                        <FaListOl className='i2' />
                        <p className='txt2'>Employee List</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <ImParagraphLeft className='i2' />
                        <p className='txt2'>Dev team Attendance</p>
                    </div>
                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <ImParagraphLeft className='i2' />
                        <p className='txt2'>Sales team Attendance</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaRegCalendarAlt className='i2' />
                        <p className='txt2'>Leaves</p>
                    </div>


                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        < MdDomainVerification className='i2' />
                        <p className='txt2'>Employee Verification</p>
                    </div>


                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaCalendarAlt className='i2' />
                        <p className='txt2'>Monthly Calendar</p>
                    </div>


                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaCalendarAlt className='i2' />
                        <p className='txt2'>Yearly Calendar</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <MdPolicy className='i2' />
                        <p className='txt2'>Company Policy</p>
                    </div>



                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaMouse className='i2' />
                        <p className='txt2'>How to Use</p>
                    </div>





                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <TbLogs className='i2' />
                        <p className='txt2'>Our Website Blogs</p>
                    </div>

                </div>

                <div style={{ marginTop: '20px' }} className='line' >


                    <div style={{ marginTop: '20px', display: 'flex', marginLeft: '4px' }} className="Button2 " >

                        <TbBrandLetterboxd className='i2' />
                        <p className='txt2'>Offer Letter</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <MdCalculate className='i2' />
                        <p className='txt2'>Salary Calculation</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <LuFileSpreadsheet className='i2' />
                        <p className='txt2'>Monthly Salary Sheet</p>
                    </div>
                    <button className="Button21" style={{ border: 'none', display: 'flex', marginLeft: '4px' }}>
                        <GrLogout style={{ color: '#006EBE' }} className='i1' />
                        <span style={{ textAlign: 'center', marginTop: '14px', color: '#006EBE' }} className='butntxt'>Logout</span>
                    </button>

                </div>

                <div style={{ marginTop: '100px' }} className='line' >


                    <div style={{ marginTop: '20px', display: 'flex', marginLeft: '4px' }} className="Button2 " >

                        <FaUserAlt className='i2' />
                        <p className='txt2'>HR-Candidate Data</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaUserAlt className='i2' />
                        <p className='txt2'>Pree-Pre-Joiniee List</p>
                    </div>

                    <div style={{ marginTop: 'px', display: 'flex', marginLeft: '4px' }} className="Button2">
                        <FaUserAlt className='i2' />
                        <p className='txt2'>Pre-Joiniee Credentails</p>
                    </div>
                </div>
                {/* <div style={{ marginTop: '40px'}} className='social-icons'>
                <FaFacebook style={{ marginLeft:'30px',marginRight: '16px', fontSize: '35px', color: '#1877F2' }} />
                <FaLinkedin style={{ marginRight: '16px', fontSize: '35px',color:'#4267B2' }} />
                <FaYoutube style={{ marginRight: '16px', fontSize: '35px',color:'#FF0000 ' }} />
                <FaInstagram style={{ marginRight: '16px', fontSize: '35px',color:'#F30907 '}} />
            </div>
            */}
                <div style={{ marginLeft: '-11px' }} className="social-icons">
                    <FaFacebook className="social-icon facebook" />
                    <FaLinkedin className="social-icon linkedin" />
                    <FaYoutube className="social-icon youtube" />
                    <FaInstagram className="social-icon instagram" />
                </div>


            </div>

            {/* Toggle button for mobile screens */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
        </>
    );
};

export default Sidebar;
