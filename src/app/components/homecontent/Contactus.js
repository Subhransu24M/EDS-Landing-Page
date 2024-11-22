import Fcntform from '../Fcntform'
import './contactus.css'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Link from 'next/link';
const Contactus = () => {
    return (
        <>
            <div className='contct-blk' id="contact-us">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-5 col-xl-5 col-sm-12'>
                            <div className='cnt-info'>
                                <span className='cnt-info-span'>Contact us</span>
                                <h2 className='cnt-info-hd'>We're open to talk</h2>
                                <div className='cnt-ibfo-blk'>
                                    <div className='ftr-cnt-box'>
                                        <div className='ftr-cnt-icn'>
                                            <IoLocationOutline className='ftr-cnticn' />
                                        </div>
                                        <div className='ftr-cnt-p'>
                                            <p>Office No: 1203 & 1207, HDS Business Center, Cluster M, JLT, Dubai, UAE</p>
                                        </div>
                                    </div>
                                    <div className='ftr-cnt-box'>
                                        <div className='ftr-cnt-icn'>
                                            <BsTelephone className='ftr-cnticn' />
                                        </div>
                                        <div className='ftr-cnt-p'>
                                            <p>+971 52 678 0437</p>
                                            <Link href="tel:971526780437" className='ftr-cnt-lnk-txt'>CALL NOW</Link>

                                        </div>
                                    </div>

                                    <div className='ftr-cnt-box'>
                                        <div className='ftr-cnt-icn'>
                                            <BsWhatsapp className='ftr-cnticn' />
                                        </div>
                                        <div className='ftr-cnt-p'>
                                            <p>+971 52 678 0437</p>
                                            <Link href="https://api.whatsapp.com/send?phone=971526780437" target='_blank' className='ftr-cnt-lnk-txt'>WHATSAPP NOW</Link>

                                        </div>
                                    </div>

                                    <div className='ftr-cnt-box'>
                                        <div className='ftr-cnt-icn'>
                                            <TfiEmail className='ftr-cnticn' />
                                        </div>
                                        <div className='ftr-cnt-p'>
                                            <p>info@elevatedigitalservices.com</p>
                                            <Link href="mailto:info@elevatedigitalservices.com" className='ftr-cnt-lnk-txt'>SEND EMAIL</Link>

                                        </div>
                                    </div>
                                </div>
                                <div className='follow-us-blk'>
                                    <h4>Follow us on</h4>
                                    <div className='scl-icn-blk'>
                                        <div className='scl-icn'>
                                            <Link href="https://www.facebook.com/Elevatedigitalservices" target='_blank'><img src="/social-icons/facebook.png" alt="elevate digital services facebook link" fetchPriority='high' loading='lazy'/></Link>
                                        </div>
                                        
                                        <div className='scl-icn'>
                                            <Link href="https://www.instagram.com/elevatedigitalservices/" target='_blank'><img src="/social-icons/instagram.png" alt="elevate digital services instagram link" fetchPriority='high' loading='lazy'/></Link>
                                        </div>
                                        
                                        <div className='scl-icn'>
                                        <Link href="https://www.linkedin.com/company/elevate-digital-services" target='_blank'><img src="/social-icons/linkedin.png" alt="elevate digital services linkedin link" fetchPriority='high' loading='lazy'/></Link>
                                        </div>
                                        <div className='scl-icn'>
                                        <Link href="https://x.com/ServicesElevate?mx=2" target='_blank'><img src="/social-icons/twitter.png" alt="elevate digital services twitter link" fetchPriority='high' loading='lazy'/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 col-xl-7 col-sm-12'>
                            <Fcntform />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus