import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';


const Contact = () => {

const[userValue, setUserValue] = useState({
  name : "",
  email : "",
  phone: " ",
  address : "",
  Subject : "",
  Message:""

});

const handleChange = (event) =>{
    const {name, value} = event.target;

    setUserValue(preValue => {
      return {
      ...preValue,
      [name] : value
      }
    })
}

const handleClick = (event) =>{
  event.preventDefault();
  const newPortfolio = {
    name : userValue.name,
    email : userValue.email,
    phone: userValue.phone,
    address : userValue.address,
    Subject : userValue.Subject,
    Message:userValue.Message
  }

  axios.post('http://localhost:3001/app/contact', newPortfolio)
    .then(res => console.log(res.data))
}

const alertData = () => {
  alert("Thank You, The form is Submitted successfully.");
}
    return (
        <>
      <div className = 'container-fluid contact'>
      <div className = 'row'>
      <div className='col-6'>
                
   <form onSubmit={handleClick}>
  <div className="form-row">

  <div className="form-group col-md-6">
      <label for="inputName">Name</label>
      <input type="text" onChange={handleChange} name="name" value={userValue.name} className="form-control" id="inputEmail4" placeholder="Enter Name" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" onChange={handleChange} name="email" value={userValue.email} className="form-control" id="inputEmail4" placeholder="Enter Email" />
    </div>
    </div>

    <div className="form-row">
    <div className="form-group col-md-12">
      <label for="inputPhone">Phone</label>
      <input type="text" onChange={handleChange} name="phone" value={userValue.phone} className="form-control" id="inputPassword4" placeholder="Phone" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" onChange={handleChange} name="address" value={userValue.address} className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label for="inputCity">Subject</label>
      <input type="text" onChange={handleChange} name="Subject" value={userValue.Subject} className="form-control" id="inputCity" placeholder='Enter Subject here...' />
    </div>
    <div className="form-group col-md-12">
      <label for="inputState">Message</label>
      <textarea id="inputState" onChange={handleChange} name="Message" value={userValue.Message} className="form-control" placeholder='Enter Message here...' />
        
    </div>
   </div>
  <input type="submit" onClick={alertData} className="btn btn-primary col-md-12" value="Submit" />
</form>
                    </div>

                    <div className='col-6'>
                        <h1 className='form_head'>Get in Touch</h1>
                        <a href="https://www.gmail.com">
                        <MailOutlineIcon className='emailContact'/>
                        </a>
                        <a href="https://linkedin.com/in/sandeepyadav07780">
                        <LinkedInIcon className='LinkedInContact'/>
                        </a>
                        <a href="tel:7747874757">
                        <PhoneAndroidIcon className='PhoneContact'/>
                        </a>
                        <a  href="https://github.com/sandeepyadav07780">
                        <GitHubIcon className='GitHubContact'/>
                        </a>

                    </div>
                    
                    </div>

                </div>
            
        </>
    );
};


export default Contact;
