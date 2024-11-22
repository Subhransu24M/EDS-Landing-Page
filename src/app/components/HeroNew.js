import './heronew.css';
import WebForm from './WebForm';


const HeroNew = () => {
    const backgroundimage = "/images/eds-bg.svg";
    return (
        <>
            <div className='hero-bg-blk' style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundPosition: "right",
          backgroundRepeat:"no-repeat",
          backgroundSize:"30%",
        }}>
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
                                                    <img src="/images/coding-4.png" alt="wevbsite & app development" width="40" height="40" loading="lazy" priority="true"/>
                                                    <p className='hero-new-serv-blk-p'>Website & App Development</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <img src="/images/seo-3.png" alt="seo service in duabi" width="40" height="40" loading="lazy" priority="true"/>
                                                    <p className='hero-new-serv-blk-p'>Search Engine Optimisaiton</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <img src="/images/sm-2.png" alt="social media marketing service" width="40" height="40" loading="lazy" priority="true"/>
                                                    <p className='hero-new-serv-blk-p'>Social Media Marketing</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-lg-3 col-xl-3 col-sm-6 col-xs-6'>
                                                <div className='hero-new-serv-blk'>
                                                    <img src="/images/adwords-1.png" alt="Google ads service" width="40" height="40" loading="lazy" priority="true"/>
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