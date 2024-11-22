"use client"

import './industry.css';
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
              <img src="/icons/realestate.png" alt="Real Estate" fetchPriority='high' loading='lazy'/>
            </div>
            <div className='inds-icon-p'>
              Real Estate
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <img src="/icons/healthcare.png" alt="Healthcare" fetchPriority='high' loading='lazy'/>
            </div>
            <div className='inds-icon-p'>
              Healthcare
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <img src="/icons/manufacture.png" alt="Manufacture" fetchPriority='high' loading='lazy'/>
            </div>
            <div className='inds-icon-p'>
              Manufacture
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <img src="/icons/restaurant.png" alt="Restaurants" fetchPriority='high' loading='lazy'/>
            </div>
            <div className='inds-icon-p'>
              Restaurants
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <img src="/icons/fmcg.png" alt="FMCG" fetchPriority='high' loading='lazy'/>
            </div>
            <div className='inds-icon-p'>
              FMCG
            </div>
          </div>
          <div className='inds-blk'>
            <div className='inds-blk-icon'>
              <img src="/icons/education.png" alt="Education" fetchPriority='high' loading='lazy'/>
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





