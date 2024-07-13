import './priceplan.css';
import Link from 'next/link';
const Priceplan = () => {
  return (
    <>
     <div className='prc-mainblk' id="price" data-aos="fade-up" data-aos-duration="1500">
        <div className='container'>
            <div className='prc-pln-tp-blk'>
            <span className='prc-pln-span'>Flexible Pricing</span>
            <h2 className='prc-pln-hd'>Flexible pricing plans. Any scale.</h2>
            <p className='prc-pln-p'>Whether you have a startup,small, medium and large business, we have a plan that aligns perfectly with your goals.</p>
            </div>
            
            <div className='row'>
                 <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                    <div className='prc-blk'>
                        <h4 className='prc-blk-hd-fr'>Startup</h4>
                        <p className='prc-blk-hd-fr-p'>Get set up for success with advanced support and services, extend your instance and unify your data.</p>
                        <div className='prc-btn'>
                            <Link href="#">Get Started</Link>
                        </div>
                    </div>
                 </div>
                 <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                    <div className='prc-blk'>
                        <h4 className='prc-blk-hd-fr'>Small Business</h4>
                        <p className='prc-blk-hd-fr-p'>Get set up for success with advanced support and services, extend your instance and unify your data.</p>
                        <div className='prc-btn'>
                            <Link href="#">Get Started</Link>
                        </div>
                    </div>
                 </div>
                 <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                    <div className='prc-blk'>
                        <h4 className='prc-blk-hd-fr'>Medium Business</h4>
                        <p className='prc-blk-hd-fr-p'>Get set up for success with advanced support and services, extend your instance and unify your data.</p>
                        <div className='prc-btn'>
                            <Link href="#">Get Started</Link>
                        </div>
                    </div>
                 </div>
                 <div className='col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xs-12'>
                    <div className='prc-blk'>
                        <h4 className='prc-blk-hd-fr'>Large Business</h4>
                        <p className='prc-blk-hd-fr-p'>Get set up for success with advanced support and services, extend your instance and unify your data.</p>
                        <div className='prc-btn'>
                            <Link href="#">Get Started</Link>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Priceplan