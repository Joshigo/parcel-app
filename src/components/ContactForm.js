import './ContactFormStyles.css'

function ContactForm(){
    return(
        <div className='form-container'>
            <h1>Manda un mensaje para nosotros</h1>
            <form>
                <input placeholder='Nombre'></input>
                <input placeholder='Email'></input>
                <input placeholder='Tema'></input>
                <textarea placeholder='Mensaje' rows='4'></textarea>
                <button>Enviar mensaje</button>
            </form>
        </div>
    )
}

export default ContactForm