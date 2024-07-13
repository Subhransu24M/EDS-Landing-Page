import './webform.css';

const WebForm = () => {
    return (
        <div className="webform-blk">
            <form>
                <div className='form-hd-blk'>
                    <h4 className='form-hd'>Let’s get</h4>
                    <h4 className='form-hd'>on a discovery call</h4>
                    <p className='web-frm-p'>(Book free consultation to get more insights)</p>
                </div>

                <div className="mb-1">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Business Name' />
                </div>

                <div className="mb-1"> 
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Full Name' />
                </div>
                <div className="mb-1">
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder='Email Id' />
                </div>
                <div className="mb-1">
                    <input type="tel" className="form-control" id="exampleInputTel" placeholder='Mobile Number'/>
                </div>
                <div className="mb-1">
                <label htmlFor="exampleInputService" className="form-label">Select Service</label>
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

                <div className='frm-btn-blk'>
                    <button type="submit" className="btn btn-primary web-frm-btn">Book Free Consultation</button>
                </div>

            </form>
        </div>
    )
}

export default WebForm