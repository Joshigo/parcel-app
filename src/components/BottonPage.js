import './BottonStyles.css'
import BottonPageData from './BottonPageData'
import Bottonimg1 from '../assets/11.jpg'
import Bottonimg2 from '../assets/16.jpg'
import Bottonimg3 from '../assets/14.jpg'


function BottonPage(){
    return(
        <div className='botton'>
            <h1>Preguntas Frecuentes(FAQ)</h1>
            <p>Encuentra respuestas rápidas a tus 
                dudas sobre envíos, seguimiento de paquetes y más. 
            </p>
            <div className='bottoncard'>
                
                <BottonPageData
                image={Bottonimg1}
                heading='Seguridad en tus envios'
                text='la seguridad de tus envíos es
                 nuestra prioridad. Detectamos y prevenimos 
                 fraudes relacionados con el envío de mercancías. 
                 Nunca transportamos dinero en efectivo ni intervenimos en 
                 transacciones económicas.'
                />

                <BottonPageData
                image={Bottonimg2}
                heading='Rastreo de Envíos'
                text='¿Dónde está mi paquete? No te preocupes, 
                nuestro sistema de rastreo de envíos te mantendrá informado
                 en tiempo real. Sigue cada paso de tu entrega con confianza.'
                />

                <BottonPageData
                image={Bottonimg3}
                heading='Realiza tu registro'
                text='Optimiza tu experiencia de envío con nuestro sencillo
                 proceso de registro. ¿Cómo puedo rastrear mi paquete? 
                 Descubre respuestas a preguntas en tu perfil.'
                />

            </div>
        </div>
    )
}

export default BottonPage

