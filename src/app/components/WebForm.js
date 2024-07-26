// "use client"
// import { useState } from 'react';
// import './webform.css';
// import axios from 'axios';

// const WebForm = () => {
//     const [bname, setBname] = useState('');
//     const [fname, setFname] = useState('');
//     const [emailid, setEmailid] = useState('');
//     const [pnumber, setPnumber] = useState('');
//     const [service, setService] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Call a function to send email using Nodemailer with formData

//         if (bname == "" && fname == "" && emailid == "" && pnumber == "" && service == "") {
//             alert("Please enter all the field");
//             return false;
//         }

//         // New Mail Handle

//         const response = await fetch ('/api/sendEmailroute',{
//             credentials : 'same-origin',
//             method : 'POST',
//             headers :{
//                'content-type': 'application/json'
//             },
//             body : JSON.stringify({
//                 bname,fname,emailid,pnumber,service
//             })
//         })
//         // console.log(await response.json())
//         const data = await response.json();
//             console.log(data);

//     };

//     return (
//         <div className="webform-blk">
//             <form onSubmit={(ev) => handleSubmit (ev)}>
//                 <div className='form-hd-blk'>
//                     <h4 className='form-hd'>Let’s get</h4>
//                     <h4 className='form-hd'>on a discovery call</h4>
//                     <p className='web-frm-p'>(Book free consultation to get more insights)</p>
//                 </div>

//                 <div className="mb-1">
//                     <input type="text" name="bname" className="form-control" id="exampleInputName" placeholder='Business Name' value={bname} onChange={(e) => setBname(e.target.value)}/>
//                 </div>

//                 <div className="mb-1"> 
//                     <input type="text" name="fname" className="form-control" id="exampleInputName" placeholder='Full Name' value={fname} onChange={(e) => setFname(e.target.value)}/>
//                 </div>
//                 <div className="mb-1">
//                     <input type="email" name="emailid" className="form-control" id="exampleInputEmail" placeholder='Email Id' value={emailid} onChange={(e) => setEmailid(e.target.value)}/>
//                 </div>
//                 <div className="mb-1">
//                     <input type="tel" name="pnumber" className="form-control" id="exampleInputTel" placeholder='Mobile Number' value={pnumber} onChange={(e) => setPnumber(e.target.value)}/>
//                 </div>
//                 <div className="mb-1">
//                 <label htmlFor="exampleInputService" className="form-label">Select Service</label>
//                     <select name="service" value={service} className="form-select" aria-label="Default select example" onChange={(e) => setService(e.target.value)}>
//                     <option value="" disabled>Select a service</option>
//                         <option value="Website Development">Website Development</option>
//                         <option value="Digital Marketing">Digital Marketing</option>
//                         <option value="App Development">App Development</option>
//                         <option value="E-Commerce Solutions">E-Commerce Solutions</option>
//                         <option value="SEO">SEO</option>
//                         <option value="Social Media Marketing">Social Media Marketing</option>
//                         <option value="Google Ads">Google Ads</option>
//                     </select>
//                 </div>

//                 <div className='frm-btn-blk'>
//                     <button type="submit" className="btn btn-primary web-frm-btn">Book Free Consultation</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default WebForm





"use client";
import { useState } from 'react';
import './webform.css';
import axios from 'axios';

const WebForm = () => {
    const [bname, setBname] = useState('');
    const [fname, setFname] = useState('');
    const [emailid, setEmailid] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [service, setService] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (bname === "" || fname === "" || emailid === "" || pnumber === "" || service === "") {
            alert("Please enter all the fields");
            return false;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/sendEmailroute', {
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bname, fname, emailid, pnumber, service })
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                setMessage('Message sent successfully!');
            } else {
                setMessage('Message sent successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <div className="webform-blk">
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <div className='form-hd-blk'>
                    <h4 className='form-hd'>Let’s get</h4>
                    <h4 className='form-hd'>on a discovery call</h4>
                    <p className='web-frm-p'>(Book free consultation to get more insights)</p>
                </div>

                <div className="mb-1">
                    <input type="text" name="bname" className="form-control" id="exampleInputName" placeholder='Business Name' value={bname} onChange={(e) => setBname(e.target.value)} />
                </div>

                <div className="mb-1">
                    <input type="text" name="fname" className="form-control" id="exampleInputName" placeholder='Full Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="mb-1">
                    <input type="email" name="emailid" className="form-control" id="exampleInputEmail" placeholder='Email Id' value={emailid} onChange={(e) => setEmailid(e.target.value)} />
                </div>
                <div className="mb-1">
                    <input type="tel" name="pnumber" className="form-control" id="exampleInputTel" placeholder='Mobile Number' value={pnumber} onChange={(e) => setPnumber(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputService" className="form-label">Select Service</label>
                    <select name="service" value={service} className="form-select" aria-label="Default select example" onChange={(e) => setService(e.target.value)}>
                        <option value="" disabled>Select a service</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                        <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                        <option value="SEO">SEO</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Google Ads">Google Ads</option>
                    </select>
                </div>

                <div className='frm-btn-blk'>
                    <button type="submit" className="btn btn-primary web-frm-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Book Free Consultation'}
                    </button>
                </div>

                {message && <p className="form-message">{message}</p>}
            </form>
        </div>
    );
};

export default WebForm;
