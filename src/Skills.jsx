import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Python from './Images/python.jpg';
import C from './Images/program1.png';
import CPP from './Images/program2.png';
import Pandas from './Images/pandas.png';
import NumPy from './Images/numpy.png';
import ML from './Images/ML.jpeg';
import AWS from './Images/AWS.png';
import S3 from './Images/S3.png';
import Java from './Images/Java.jpg';
import HTML from './Images/HTML.png';
import SQL from './Images/SQL.jpg';
import DV from './Images/DV.jpg';





const Skills = () => {
    return (
        <>
            <div className="container-fluid skills">
                <div className='row'>
                    <div className='col-3 skills_Div'>
                        <img src={Python} className='skills_Img1' alt="Python_Skills" />
                    </div>

                    <div className='col-3 skills_Div'>
                    <img src={C} className='skills_Img2' alt="C_Skills" />
                    </div>

                    
                    <div className='col-3 skills_Div'>
                    <img src={CPP} className='skills_Img3' alt="C_Skills" />
                    </div>
                    
                    <div className='col-3 skills_Div'>
                    <img src={Pandas} className='skills_Img4' alt="C_Skills" />
                    </div>

                </div>

                <div className='row'>
                    <div className='col-3 skills_Div'>
                        <img src={NumPy} className='skills_Img5' alt="NumPy_Skills" />
                    </div>

                    <div className='col-3 skills_Div'>
                    <img src={ML} className='skills_Img6' alt="C_Skills" />
                    </div>

                    
                    <div className='col-3 skills_Div'>
                    <img src={AWS} className='skills_Img7' alt="C_Skills" />
                    </div>
                    
                    <div className='col-3 skills_Div'>
                    <img src={S3} className='skills_Img8' alt="C_Skills" />
                    </div>

                </div>

                
                <div className='row'>
                    <div className='col-3 skills_Div'>
                        <img src={Java} className='skills_Img9' alt="NumPy_Skills" />
                    </div>

                    <div className='col-3 skills_Div'>
                    <img src={HTML} className='skills_Img10' alt="C_Skills" />
                    </div>

                    
                    <div className='col-3 skills_Div'>
                    <img src={SQL} className='skills_Img11' alt="C_Skills" />
                    </div>
                    
                    <div className='col-3 skills_Div'>
                    <img src={DV} className='skills_Img12' alt="C_Skills" />
                    </div>

                </div>
            </div>
        </>
    );
};


export default Skills;
