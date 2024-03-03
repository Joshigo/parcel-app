import BottonPage from "../components/BottonPage";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";

function Home (){
    return (
        <>
            <Navbar />
            <Hero 
            cName='hero'
            heroImg='https://images.unsplash.com/photo-1559087316-f8860a97e7ba?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='¡Tú confiable agencia de envíos!'
            text='“Conectando Distancias, Entregando Confianza”'
            buttonText='Agenda tu envío'
            url='/'
            btnClass='show'
            />
            <MainPage/>
            <BottonPage/>
            <Footer/>
        </>
    )
}

export default Home;