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
import Blobanm from './components/blob/Blobanm';
import Industry from './components/homecontent/Industry';
import Footer from './components/footer/Footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <Footer/>
      
      

      {/* <Hero/> */}
      {/* <HomeContent/> */}
      {/* <IndustryServed/> */}
    </>
  );
}
