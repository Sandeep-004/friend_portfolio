import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid Foot">
                <div className="row">
                    <div className="col-12">    
                   <h1>Made With 
                     <span style={{color: "red", width:'5rem', height:'5vh'}}> ❤️ </span>
                        By Sandeep Sharma
                     </h1>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Footer;