import './globals.css'
import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import HomeContent from './components/homecontent/HomeContent';
// import IndustryServed from './components/homecontent/IndustryServed';
import HeroNew from './components/HeroNew';
import Whoweare from './components/homecontent/Whoweare';
import Whatwedo from './components/homecontent/Whatwedo';
import Priceplan from './components/homecontent/Priceplan';
import StickyCta from './components/stickyelement/StickyCta';
// import Blobanm from './components/blob/Blobanm';
import Industry from './components/homecontent/Industry';
import Footer from './components/footer/Footer';
import Contactus from './components/homecontent/Contactus';

export const metadata = {
  title: "Professional Website Development & Digital Marketing Agency in UAE",
  description: "Get comprehensive website development and digital marketing services in the UAE. We offer tailored web design, SEO, PPC, and social media marketing to help your business grow.",
  keywords: "website development uae, digital marketing service uae, digital marketing agency uae, website development agency uae",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroNew />
      <Whoweare/>
      <Whatwedo/>
      <Priceplan/>
      <StickyCta/>
      <Industry/>
      <Contactus/>
      <Footer/>
    </>
  );
}
