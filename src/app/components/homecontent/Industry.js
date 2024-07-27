// import './industry.css';
// import Image from 'next/image';
// import realestate from '../../icons/realestate.png';
// import healthcare from '../../icons/healthcare.png';
// import manufacture from '../../icons/manufacture.png';
// import restaurants from '../../icons/restaurant.png';
// import fmcg from '../../icons/fmcg.png';
// import education from '../../icons/education.png';
// const Industry = () => {
//   return (
//     <>
//     <div className='industry-work-blk'>
//         <h2 className="inds-sndhd">Industries We've Worked With</h2>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                     <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                           <Image src={realestate} alt="real estate" />  
//                         </div>
//                         <div className='inds-icon-p'>
//                             Real Estate
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                 <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                         <Image src={healthcare} alt="Healthcare" /> 
//                         </div>
//                         <div className='inds-icon-p'>
//                             Healthcare
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                 <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                         <Image src={manufacture} alt="Manufacture" />
//                         </div>
//                         <div className='inds-icon-p'>
//                             Manufacture
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                 <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                         <Image src={restaurants} alt="Restaurants" />
//                         </div>
//                         <div className='inds-icon-p'>
//                             Restaurants
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                 <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                         <Image src={fmcg} alt="FMCG" />
//                         </div>
//                         <div className='inds-icon-p'>
//                             FMCG
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-3 col-lg-2 col-xl-2 col-sm-6'>
//                 <div className='inds-blk'>
//                         <div className='inds-blk-icon'>
//                         <Image src={education} alt="Education" />  
//                         </div>
//                         <div className='inds-icon-p'>
//                             Education
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Industry


"use client"

import './industry.css';
import Image from 'next/image';
import realestate from '../../icons/realestate.png';
import healthcare from '../../icons/healthcare.png';
import manufacture from '../../icons/manufacture.png';
import restaurants from '../../icons/restaurant.png';
import fmcg from '../../icons/fmcg.png';
import education from '../../icons/education.png';
import Slider from 'react-slick';
import Link from 'next/link';


const Industry = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,     
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,     
    autoplaySpeed: 2000,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,     
    autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,     
    autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <div className='industry-work-blk' id="casestudies">
      <h2 className="inds-sndhd">Industries We've Worked With</h2>
      <div className='container'>
        <Slider {...settings}>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={realestate} alt="Real Estate" />
            </div>
            <div className='inds-icon-p'>
              Real Estate
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={healthcare} alt="Healthcare" />
            </div>
            <div className='inds-icon-p'>
              Healthcare
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={manufacture} alt="Manufacture" />
            </div>
            <div className='inds-icon-p'>
              Manufacture
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={restaurants} alt="Restaurants" />
            </div>
            <div className='inds-icon-p'>
              Restaurants
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={fmcg} alt="FMCG" />
            </div>
            <div className='inds-icon-p'>
              FMCG
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <Image src={education} alt="Education" />
            </div>
            <div className='inds-icon-p'>
              Education
            </div>
          </div>
          </Slider>
        <div className='case-study-blk'>
            <h3 className='cas-stud-hd'>Interested about case studies</h3>
            <Link href="#contact-us" id="contactus">Request Case Study</Link>
        </div>
      </div>
    </div>
  )
}

export default Industry;





