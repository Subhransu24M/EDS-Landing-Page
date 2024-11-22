import Link from 'next/link';
import './navbar.css';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top">
                <div className="container">
                    <div className="logo">
                        <img src="/logo/eds-logo.svg" width="75" height="75" alt="elevate digital services" fetchPriority='high' loading='lazy'/>
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
                    <Link href="tel:971526780437"><img src="/icons/phone-call.png" alt="call icon" width="22" height="22" fetchPriority='high' loading='lazy'/> <span className='telnum'>+971 52 678 0437</span></Link>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default NavBar