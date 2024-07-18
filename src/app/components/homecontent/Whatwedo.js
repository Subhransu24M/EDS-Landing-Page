import './whatwedo.css';
import { BsCheckLg } from "react-icons/bs";
import conversionimg from '../../images/conversion.png';
import webdesignimg from '../../images/web-design.png';
import Image from 'next/image';
const Whatwedo = () => {
    return (
        <>
        <div id="whatwedo" className='whatwedocls' data-aos="fade-up" data-aos-duration="1500">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <div className='whwd-lft-blk'>
                            <span className='drvs-span'>Improve Conversion</span>
                            <h2 className='drvs-sndhd'>Drive more sales,<br></br>analyze performance</h2>
                            <p>From lead generation to conversion, We covers every aspect of your marketing journey.</p>
                            <div className='wht-lst-blk'>
                                <div className='whtlst-blk-one'>
                                    <ul className='whtlst-ul'>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Lead Generation</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Shopping Ads</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>App Marketing</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Brand Awarness</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='whtlst-blk-two'>
                                    <ul className='whtlst-ul'>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>SEO</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Social Media Marketing</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Google Ads</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'> Content Creation</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <div className='whwd-rgt-img-blk'>
                            <div className='whwd-rgt-img'>
                            <div className='whtn-low-spn-blk'>
                            <p className='wht-low-spn'>uncover opportunities</p>
                            <p className='wht-low-spn'>Boost conversions, </p> 
                            </div>
                                <Image src={conversionimg} alt="digital marketing service" width={500} height={500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* second block */}

        <div id="whatwedo" className='whatwedosndcls' data-aos="fade-up" data-aos-duration="1500">
            <div className='container'>
                <div className='row mb-flx-dir'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <div className='whwd-rgt-img-blk'>
                            <div className='whtn-low-spn-blk'>
                            <p className='wht-low-spn'>refine your content</p>
                            <p className='wht-low-spn'>Optimize page layouts and </p> 
                            </div>
                            
                            <div className='whwd-rgt-img'>
                                <Image src={webdesignimg} alt="digital marketing service" width={500} height={500}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <div className='whwd-lft-blk snd-blk'>
                            <span className='drvs-span'>Improve Brand Identity</span>
                            <h2 className='drvs-sndhd'>Acquire and retain <br></br>more customers</h2>
                            <p>Enhance your website's effectiveness. Tailor page layouts and refine content. Elevate user engagement, improve retention, and increase your revenue potential.</p>
                            <div className='wht-lst-blk'>
                                <div className='whtlst-blk-one'>
                                    <ul className='whtlst-ul'>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Website Design</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>E-comeerce Solutions</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>App Development</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Brand Stratergy</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='whtlst-blk-two'>
                                    <ul className='whtlst-ul'>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Logo Design</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Website Maintenance</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'>Domain & Hosting</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='lst-dv-blk'>
                                                <div className='lst-icon'><BsCheckLg /></div>
                                                <div className='lst-nm'> Content Creation</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
                        <div className='whwd-rgt-img-blk'>
                            <div className='whwd-rgt-img'>
                                <Image src={webdesignimg} alt="digital marketing service" width={500} height={500}/>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Whatwedo