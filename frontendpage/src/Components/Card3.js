import React from "react";
import './Card3.css';
import logo from '../Components/icon.jpg';

const Card3 = () => {
    return (
        <div className="card-container">
            <div className="Crad3">
                <div>
                    DIv1
                </div>
            </div>

            <div className="card4">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ paddingTop: '5px', marginLeft: '10px' }}>New Joiner Candidate</h3>
                    <p style={{ marginRight: '10px', color: '#006EBE', borderBottom: '1px solid black' }}>
                        View All
                    </p>
                </div>
                {[...Array(3)].map((_, index) => (
                    <div className="color" key={index} style={{ marginTop: index > 0 ? '20px' : '0' }}>
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                                <p style={{marginTop:'20px'}}>DiannaRusael<br />ATSID1234</p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card3;