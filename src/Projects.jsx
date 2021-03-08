import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pro1 from './Images/pro1.jpg';
import pro2 from './Images/pro2.png';
import pro3 from './Images/pro3.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Projects = () => {
    return (
        <>
            <div className="projects_div">
            <div className="row">
                <div className="col-4" >
            <div class="card" data-aos="fade-right"  data-aos-offset="200"
    data-aos-delay="50" data-aos-duration="1000" style={{width: '22rem'}}>
                <img className="card-img-top" src={pro1} alt="Card image cap" />
            <div className="card-body">
                 <h4 className="card-text">Traffic Monitor </h4>
              </div>
            </div>
         </div>

         <div className="col-4">
            <div class="card" style={{width: '22rem'}}>
                <img className="card-img-top" src={pro2} alt="Card image cap" />
            <div className="card-body">
                 <h4 className="card-text">Weather Pattern Analysis</h4>
              </div>
            </div>
         </div>

                <div className="col-4">
            <div class="card" data-aos="fade-left"  data-aos-offset="200"
    data-aos-delay="50" data-aos-duration="1000" style={{width: '22rem'}}>
                <img className="card-img-top" src={pro3} alt="Card image cap" />
            <div className="card-body">
                 <h4 className="card-text">Charity Website </h4>
              </div>
            </div>
         </div>

       </div>
    </div>
        </>
    );
};


export default Projects;
