
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Footer from '../components/landing/Footer';
import FeaturesGrid from "../components/landing/FeaturesGrid.tsx";
import Display from "../components/landing/Display.tsx";
import CTA from "../components/landing/CTA.tsx";
import Reviews from "../components/landing/Reviews.tsx";
import CTA2 from "../components/landing/CTA2.tsx";
import Contact from "../components/landing/Contact.tsx";
import Services from "../components/landing/Services.tsx";
import CTA3 from "../components/landing/CTA3.tsx";
import BackToTop from "../components/landing/BackToTop.tsx";


function Landing() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <FeaturesGrid/>
            <Display/>
            <Services />
            <CTA3/>
            {/*<Features />*/}
            <CTA/>
            <Reviews/>
            <CTA2/>
            {/* <Services /> */}
            {/* <Testimonials /> */}

             <Contact />
            <Footer />
            <BackToTop/>
        </div>
    );
}

export default Landing;