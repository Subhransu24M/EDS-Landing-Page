import './homecontent.css';
import ServiceSection from './ServiceSection';

const HomeContent = () => {
    return (
        <>
        <div className='hm-fst-bdy-blk'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-xl-6 col-lg-6 col-sm-12 col-xs-12'>
                        <div className='lft-hd-blk'>
                            <h1>Your Digital Creative & Technology Partner</h1>

                        </div>
                    </div>
                    <div className='col-md-12 col-xl-6 col-lg-6 col-sm-12 col-xs-12'>
                        <div className='rgt-img-blk'>
                            <div className='rgt-img-blk-img'>
                                <img src="/bg-images/dubai-bg-1.jpg" alt="Digital Marketing Services Dubai" fetchPriority='high' loading='lazy'/>
                            </div>

                            <div className='p-rght'>
                                <p>Marketing & Tecnology Service We Offer</p>
                                <p>We deliver effective, efficient & innovative solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Service Section Starts */}
        <ServiceSection/>
        </>
        
    )
}

export default HomeContent