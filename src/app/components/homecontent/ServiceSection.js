import './servicesection.css';

const ServiceSection = () => {
    return (
      <div className='serv-bg'>
        <div className="serv-sec-blk">
            <h5>Our Services</h5>
            <h2 className='serv-blk-hd-snd'>CONNECTING YOUR BUSINESS WITH NEW AND EXISTING CUSTOMERS.</h2>
          <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12'>
                    <div className='soln-blk'>
                          <h5>Digital Solution</h5>
                          <ul className='dgm-soln-ul'>
                            <li>Search Engine Optimization </li>
                            <li>Search Engine Marketing </li>
                            <li>Social Media Marketing </li>
                            <li>Shopping Ads</li>
                            <li>Google Ads </li>
                            <li>Re-marketing</li>
                            <li>Content Marketing</li>
                            <li>Email campaigns</li>
                            <li>Brand Stragery</li>
                          </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12'>
                <div className='soln-blk'>
                <h5>Creative Solution</h5>
                          <ul className='dgm-soln-ul'>
                            <li>Logo Design</li>
                            <li>Corporate Branding Kit</li>
                            <li>Infographics & Ebooks </li>
                            <li>Corporate Presentation</li>
                            <li>Marketing Collateral</li>
                            <li>Brochure Designing</li>
                            <li>Email Newsletter</li>
                            <li>Corporate Video Profile</li>
                            <li>Campaign Videos</li>
                            <li>Social Media Video Content</li>
                          </ul>
                </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12'>
                <div className='soln-blk'>
                <h5>Technology Solution</h5>
                          <ul className='dgm-soln-ul'>
                            <li>Website Design & Development</li>
                            <li>Landing Pages</li>
                            <li>Content Management</li>
                            <li>Hosting & Maintenance</li>
                            <li>Android/iOS App Development</li>
                            <li>E-Commerce Solutions</li>
                            <li>CRM Consulting</li>
                            
                          </ul>
                </div>
                </div>
            </div>
          </div>
            
        </div>
        </div>
    )
}

export default ServiceSection