import './heronew.css';
import WebForm from './WebForm';
import Image from 'next/image';
import code from '@/app/icons/coding-4.png'
import seo from '@/app/icons/seo-3.png';
import smo from '@/app/icons/sm-2.png';
import gads from '@/app/icons/adwords-1.png';


const HeroNew = () => {
    return (
        <>
            <div className='hero-bg-blk'>
                <div className='herpnew-blk'>
                    <div className='hero-cnt-blk'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 col-xl-7 col-lg-7 col-sm-12 col-xs-12'>
                                    <div className='hero-new-lft'>
                                        <h1 data-aos="zoom-in" data-aos-duration="1000">Revolutionize the way you connect with your audience</h1>
                                    </div>
                                    <p className='new-hro-p' data-aos="zoom-in" data-aos-duration="1200">Accelerate your business with our solutions and stay ahead in the competitive market by being among the first to benefit from our game-changing solutions.</p>

                                    
                                    <div className='hero-new-lft-snd-blk' data-aos="fade-up" data-aos-duration="1200">

                                        <div className='row her-blk-row'>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <Image src={code} alt="wevbsite & app development" width={40} height={40} />
                                                    <p className='hero-new-serv-blk-p'>Website & App Development</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <Image src={seo} alt="seo service in duabi" width={40} height={40} />
                                                    <p className='hero-new-serv-blk-p'>Search Engine Optimisaiton</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <Image src={smo} alt="social media marketing service" width={40} height={40} />
                                                    <p className='hero-new-serv-blk-p'>Social Media Marketing</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <Image src={gads} alt="Google ads service" width={40} height={40} />
                                                    <p className='hero-new-serv-blk-p'>Google Advertisement</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 col-xl-5 col-lg-5 col-sm-12 col-xs-12'>
                                    <div className='hero-new-rgt'>
                                        <WebForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroNew