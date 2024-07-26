"use client"
import { useState } from 'react';
import './fcntform.css';

const Fcntform = () => {
    const [businessname, setBusinessname] = useState('');
    const [customername, setCustomername] = useState('');
    const [emailid,setEmailid] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [services,setServices]= useState('');
    const [location,setLocation]= useState('');
    const [message,setMessage]= useState('');

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateFields = () => {
        const errors = {};

        if (!businessname) errors.businessname = 'Business name is required *';
        if (!customername) errors.customername = 'Customer name is required *';
        if (!emailid) errors.emailid = 'Email ID is required';
        else if (!/^\S+@\S+\.\S+$/.test(emailid)) errors.emailid = 'Enter a valid email address *';
        
        if (!phonenumber) errors.phonenumber = 'Phone number is required *';
        else if (!/^\d{10}$/.test(phonenumber)) errors.phonenumber = 'Enter a valid 10-digit phone number';
        
        if (!services) errors.services = 'Please select a service *';
        

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleformSubmit = async (ev) => {
        ev.preventDefault();

        if (!validateFields()) {
            return;
        }

        setLoading(true);
        setSuccessMessage('');
    
        try {
            const response = await fetch('/api/sendFooteremail', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                businessname,
                customername,
                emailid,
                phonenumber,
                services,
                location,
                message,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
    
        if (response.ok) {
            setSuccessMessage(data.message);
        } else {
            setSuccessMessage(data.error);
        }
    } catch (error){
        setLoading(false);
        setSuccessMessage('An error occurred. Please try again later.');
    }
    };


    return (
        <>
            <div className='fcntfrm-blk'>
                <form onSubmit={(ev)=>handleformSubmit(ev)}>
                <div className="row pb-3">
                    <div className="col">
                    <label className="form-label">Business Name</label>
                        <input name="businessname" type="text" className="form-control" placeholder="Business Name" value={businessname} onChange={(e) =>setBusinessname(e.target.value)}/>
                        {errors.businessname && <span className="error-text">{errors.businessname}</span>}
                    </div>
                    <div className="col">
                    <label  className="form-label">Name</label>
                        <input type="text" name="customername" className="form-control" placeholder="Your Name" value={customername} onChange={(e) =>setCustomername(e.target.value)}/>
                        {errors.customername && <span className="error-text">{errors.customername}</span>}
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Email Id</label>
                        <input type="text" name="emailid" className="form-control" placeholder="Your Email Id" value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
                        {errors.emailid && <span className="error-text">{errors.emailid}</span>}
                    </div>
                    <div className="col">
                    <label  className="form-label">Phone Number</label>
                        <input type="text" name="phonenumber" className="form-control" placeholder="Your Phone Number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                        {errors.phonenumber && <span className="error-text">{errors.phonenumber}</span>}
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Select Service</label>
                    <select name="services" className="form-select" aria-label="Default select example" value={services} onChange={(e)=>setServices(e.target.value)}>
                    <option value=" ">Select Service</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                        <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                        <option value="SEO">SEO</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Google Ads">Google Ads</option>
                    </select>
                    {errors.services && <span className="error-text">{errors.services}</span>}
                    </div>
                    <div className="col">
                    <label  className="form-label">Country</label>
                        <input type="text" name="location" className="form-control" placeholder="Your Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                        
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Messages</label>
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    
                    </div>
                </div>

                <div className='frm-btn-blk'>
                    <button type="submit" className="btn btn-primary web-frm-btn" disabled={loading}>{loading ? 'Sending...' : 'Book Free Consultation'}</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </div>
                </form>
            </div>
        </>
    )
}

export default Fcntform