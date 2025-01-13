import React from 'react';
import './Card.css';
import './Card2.css';

const Card2 = () => {
    return (
        <>
            <div className="card-container">
                <div className='box'>
                    {/* Corrected Table Structure */}
                    <table>
                        <thead>
                            <tr >
                                <th style={{ fontSize: '22px' }}>Employee List</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr >
                                <td >Name</td>
                                <td style={{ textAlign: 'center' }}>Employee ID</td>
                                <td>Profile</td>
                            </tr>
                            <tr>
                                <td style={{fontSize:"16px"}}>Vansh</td>
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

                        </tbody>
                    </table>
                </div>

                <div className='box2'>
                    vanshgyuaoaggu
                </div>
            </div>
        </>
    );
};

export default Card2;
