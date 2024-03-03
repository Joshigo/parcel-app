import MainP1 from '../assets/20.jpg'
import MainP2 from '../assets/6.jpg'
import MainP3 from '../assets/10.jpg'
import MainP4 from '../assets/9.jpg'
import MainPageData from './MainPageData'
import './MainPageStyles.css'

const MainPage = () => {
    return (
        <div className="mainpage">
            <h1>¡Inicia tu prueba gratis hoy mismo!</h1>
            <p>Para compras superiores a X dolares</p>

            <MainPageData
            className='first-des'
            heading='Envíos dentro y fuera del pais'
            text='Conectamos continentes, llevando tus paquetes más allá de las fronteras.
             Tu confianza, nuestro compromiso internacional.'
            img1={MainP1}    
            img2={MainP2}
            />

            <MainPageData
            className='first-des-reverse'
            heading='Conéctate con personas de todo el mundo con facilidad'
            text='Unimos distancias, entregando tus paquetes con confianza
             y eficiencia. Tu conexión global, nuestra prioridad local.'
            img1={MainP3}    
            img2={MainP4}
            />
        </div>
    )
}

export default MainPage