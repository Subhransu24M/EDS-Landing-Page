import './industry.css';
import Image from 'next/image';
import realestate from '../../icons/realestate.png';
import healthcare from '../../icons/healthcare.png';
import manufacture from '../../icons/manufacture.png';
import restaurants from '../../icons/restaurant.png';
import fmcg from '../../icons/fmcg.png';
import education from '../../icons/education.png';
const Industry = () => {
  return (
    <>
    <div className='industry-work-blk'>
        <h2 className="inds-sndhd">Industries We've Worked With</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                    <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                          <Image src={realestate} alt="real estate" />  
                        </div>
                        <div className='inds-icon-p'>
                            Real Estate
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                        <Image src={healthcare} alt="Healthcare" /> 
                        </div>
                        <div className='inds-icon-p'>
                            Healthcare
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                        <Image src={manufacture} alt="Manufacture" />
                        </div>
                        <div className='inds-icon-p'>
                            Manufacture
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                        <Image src={restaurants} alt="Restaurants" />
                        </div>
                        <div className='inds-icon-p'>
                            Restaurants
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                        <Image src={fmcg} alt="FMCG" />
                        </div>
                        <div className='inds-icon-p'>
                            FMCG
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
                <div className='inds-blk'>
                        <div className='inds-blk-icon'>
                        <Image src={education} alt="Education" />  
                        </div>
                        <div className='inds-icon-p'>
                            Education
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Industry




