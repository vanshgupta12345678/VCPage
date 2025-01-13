import React from 'react';
import './Card.css';
import './Card2.css';
import { FaCalendarAlt } from "react-icons/fa";
const Card2 = () => {
    return (
        <>
            <div className="card-container">
                <div className='box'>
                    {/* Corrected Table Structure */}
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
                            <tr>
                                <td>Vansh</td>
                                <td>Vansh</td>
                                <td style={{ textAlign: 'right', paddingLeft: '4rem' }}>Vansh</td>
                            </tr>
                            <tr>
                                <td>Vansh</td>
                                <td>Vansh</td>
                                <td>Vansh</td>
                            </tr>
                            <tr>
                                <td>Vansh</td>
                                <td>Vansh</td>
                                <td>Vansh</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }} colSpan="3" >
                                    View All Employees
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='box2'>
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
                        <div style={{ marginTop: '10px',color:'white' }}>
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
