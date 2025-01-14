import React from "react";
import './Card4.css';
import logo from '../Components/icon.jpg';

const Card4 = () => {
    return (
        <div className="card-container">
            <div className="Card101">
                <div>
                    <h3 style={{ marginLeft: '20px' }}>
                        Open Positions
                    </h3>

                    <div style={{ borderRadius: '12px', height: '150px', width: '550px', marginLeft: '20px', backgroundColor: '#E6F5FF' }}>
                        <div style={{ padding: '30px', paddingTop: '20px' }} >
                            <span style={{ border: '1px solid #006EBE', color: '#006EBE', padding: '7px', borderRadius: '50%' }}>FD</span>
                            <span> Flutter Developer</span>
                            <span style={{ color: '#006EBE', marginLeft: '170px' }}>View In Description</span><br />
                            <p>Experience Required 1-4 years</p><p>
                                <b>Job Description</b>:hello ats how are your<br />hello ats my name is vansh gupta
                            </p>
                        </div>

                    </div>


                    <div style={{ marginTop: '20px', borderRadius: '12px', height: '150px', width: '550px', marginLeft: '20px', backgroundColor: '#FFEFF1' }}>
                        <div style={{ padding: '30px', paddingTop: '20px' }} >
                            <span style={{ border: '1px solid #FC697E', color: '#FC697E', padding: '7px', borderRadius: '50%' }}>FD</span>
                            <span> Flutter Developer</span>
                            <span style={{ color: '#006EBE', marginLeft: '170px' }}>View In Description</span><br />
                            <p>Experience Required 1-4 years</p><p>
                                <b>Job Description</b>:hello ats how are your<br />hello ats my name is vansh gupta
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Card401" >
                <div style={{ display: 'flex' }}>
                    <h3 style={{ marginLeft: '10px' }}>New Joiner Candidate</h3>
                    <p style={{ marginRight: '10px', color: '#006EBE', borderBottom: '1px solid black', marginLeft: '170px' }}>
                        View All
                    </p>
                </div>
                <div style={{ backgroundColor: '#ffffff', border: '1px #F0F3F7', margin: '20px', height: '100px', display: 'flex' }}>

                    <img style={{ width: '50px', height: '50px', margin: '10px', marginTop: '20px', border: '1px solid black', }} src={logo} alt="Logo" />
                    <p>Yours Success Our Commitments Arthtech Supports Post Deleviery Supports<br /><span style={{ marginLeft: '15rem' }}> 9 Sep 2024</span></p>

                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px #F0F3F7', margin: '20px', height: '100px', display: 'flex' }}>

                    <img style={{ width: '50px', height: '50px', margin: '10px', marginTop: '20px', border: '1px solid black', }} src={logo} alt="Logo" />
                    <p>Yours Success Our Commitments Arthtech Supports Post Deleviery Supports<br /><span style={{ marginLeft: '15rem' }}> 9 Sep 2024</span></p>

                </div><div style={{ backgroundColor: '#ffffff', border: '1px #F0F3F7', margin: '20px', height: '100px', display: 'flex' }}>

                    <img style={{ width: '50px', height: '50px', margin: '10px', marginTop: '20px', border: '1px solid black', }} src={logo} alt="Logo" />
                    <p>Yours Success Our Commitments Arthtech Supports Post Deleviery Supports<br /><span style={{ marginLeft: '15rem' }}> 9 Sep 2024</span></p>

                </div>
            </div>


        </div>
    );
}

export default Card4;