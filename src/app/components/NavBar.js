import edslogo from '@/app/logo/eds-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import callicon from '@/app/icons/phone-call.png';
// import { Link } from 'react-scroll';

import './navbar.css';

const NavBar = () => {
    return (
        // <nav>
        //     <div className="container nav-blk">
        //         <div className="logo">
        //             <Image src={edslogo} width={100} height={100} alt="elevate digital services"/>
        //         </div>
        //     </div>
        // </nav>
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top">
                <div className="container">
                    <div className="logo">
                        <Image src={edslogo} width={75} height={75} alt="elevate digital services" />
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link className="nav-link" href="#whoweare" smooth="true" duration={500}>Who we are</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#whatwedo" smooth="true" duration={500}>What we do</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#price" smooth="true" duration={500}>Price</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#casestudies" smooth="true" duration={500}>Case Studies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#contact-us" smooth="true" duration={500}>Contact us</Link>
                            </li>

                        </ul>
                    </div>

                    <div className='nav-cta'>
                    <Link href="tel:971526780437"><Image src={callicon} alt="call icon" width={22} height={22} /> <span className='telnum'>+971 52 678 0437</span></Link>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default NavBar