import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from '../assets/13.jpg'
import Footer from "../components/Footer";
import BottonPage from "../components/BottonPage";

function Service (){
    return (
        <>
            <Navbar />
            <Hero 
            cName='hero-mid'
            heroImg={AboutImg}
            title='Servicios'
            
            btnClass='hide'
            />
            <BottonPage />
            <Footer/>
        </>
    )
}

export default Service;