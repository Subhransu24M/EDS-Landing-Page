import Image from 'next/image';
import './hero.css';
import WebForm from './WebForm';
import Link from 'next/link';
import callicon from '@/app/icons/phone-call.png';
import whatsappicon from '@/app/icons/whatsapp.png';

const Hero = () => {
    return (
        <>        
                <div className='hero-blk'>
                    <div className='container posn'>
                        <div className='row'>
                            <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12'>
                                <h1 className='hero-hd'>
                                    THE REGION’S LEADING DIGITAL AND SOCIAL MEDIA AGENCY. REACH YOUR AUDIENCES & GROW YOUR BUSINESS WITH A DATA-DRIVEN DIGITAL & SOCIAL STRATEGY.
                                </h1>
                                <div className='hero-p'>
                                    <p>Let us tailor digital and social media marketing strategies that will help you to drive awareness, build your following, boost your online presence, generate leads and bring traffic that converts into revenue.</p>
                                </div>

                                <div className='hero-call-cta'>
                                    <div className='call-cta'>
                                        <div className='cta-icon'>
                                            
                                            <Link href="tel:+97156453455"><Image src={callicon} alt="call icon" width={22} height={22}/> <span className='telnum'>+971 56453455</span></Link>
                                        </div>
                                        
                                    </div>
                                    <div className='call-cta'>
                                    <div className='cta-icon'>
                                            
                                            <Link href="#"><Image src={whatsappicon} alt="whatsapp icon" width={22} height={22}/><span className='whatsnum'>+971 56453455</span></Link>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12'>
                                <WebForm />
                            </div>
                        </div>
                        <div className="blob"></div>
                    </div>
                
            </div>
        </>
    )
}

export default Hero