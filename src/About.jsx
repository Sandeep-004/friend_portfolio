import React from 'react';
import Profile from './Images/profile.jpeg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const About = () => {
    return (
        <>

        <div className="container-fluid about_div">
            <div className = 'row'>
                <div className='col-6'>
                <img src={Profile} alt="Profile_Pic" className="Profile"></img>
                <button className= "btn btn-outline-danger resume">Download Resume</button>
                </div>
                <div className="col-6 about_me_div">
                     <h1 className="about_me_head">HI, I'M SANDEEP YADAV</h1> 
                    <p className="about_me_Detail">A self motivated person 
                    with proven and analytical and professional skills. My objective is to work
                     with a progressive organization where I can utilize my problem soliving skills 
                     and the challenges help me to brush my skills.
                    </p>
                   
                    <h4 className="email" >My Email : <span style={{color:'#fff'}}>sandeep.yadav.07780@gmail.com</span></h4>

                </div>
            </div>
          </div>
        </>
    );
};


export default About;
