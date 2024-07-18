import './fcntform.css';

const Fcntform = () => {
    return (
        <>
            <div className='fcntfrm-blk'>
                <div className="row pb-3">
                    <div className="col">
                    <label className="form-label">Business Name</label>
                        <input type="text" className="form-control" placeholder="Business Name" aria-label="Business Name" />
                    </div>
                    <div className="col">
                    <label  className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" aria-label="Name" />
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Email Id</label>
                        <input type="text" className="form-control" placeholder="Your Email Id" aria-label="Email id" />
                    </div>
                    <div className="col">
                    <label  className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Your Phone Number" aria-label="Contact number" />
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Select Service</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="1">Website Development</option>
                        <option value="2">Digital Marketing</option>
                        <option value="3">App Development</option>
                        <option value="3">E-Commerce Solutions</option>
                        <option value="3">SEO</option>
                        <option value="3">Social Media Marketing</option>
                        <option value="3">Google Ads</option>
                    </select>
                    </div>
                    <div className="col">
                    <label  className="form-label">Country</label>
                        <input type="text" className="form-control" placeholder="Your Location" aria-label="Location" />
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                    <label  className="form-label"> Messages</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>

                <div className='frm-btn-blk'>
                    <button type="submit" className="btn btn-primary web-frm-btn">Book Free Consultation</button>
                </div>
            </div>
        </>
    )
}

export default Fcntform