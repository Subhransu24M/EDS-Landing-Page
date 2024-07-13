import "./whoweare.css";
import whoweareimg from '@/app/images/brand.png';
import whoweareanalyticsimg from '@/app/images/analytics.jpg';
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
const Whoweare = () => {
  return (
    <>
    <div id="whoweare" data-aos="fade-up" data-aos-duration="1500">
      <div className="whoweare-main-blk" >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="whoweare-blk">
              <span className="wh-o-r-blk">Who we are</span>
              <h2 className="whr-snd">Elevate your brand with <br></br>our marketing magic</h2>
              <p>
              If you're looking for the best 360 degree digital marketing services for your business, Elevate Digital Services is the perfect choice. We have over 10+ years of experience in the SEO, Social Media Marketing, Google Ads & Website Development and we know exactly </p>
              <ul className="wht-we-r-ul">
                <li>
                  <div className="whtweriblk">
                  <div className="whtwericnblk"><BsCheckLg className="whtwericn"/></div>
                  <div className="whtwericnblkli">How to improve traffic on website ?</div>
                  </div>
                  
                </li>
                <li>
                <div className="whtweriblk">
                  <div className="whtwericnblk"><BsCheckLg className="whtwericn"/></div>
                  <div className="whtwericnblkli">How to transform Your website rraffic into customers ?</div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="whoweare-img-blk">
            <div className="whoweare-img">
              <Image src={whoweareimg} alt="digital amrketing services uae" width="100%" height="auto" />
            </div>
            <div className="whoweare-img">
              <Image className="analyimg" src={whoweareanalyticsimg} alt="digital amrketing services uae" width="100%" height="auto" />
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

export default Whoweare