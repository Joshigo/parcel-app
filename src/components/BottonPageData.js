import './BottonStyles.css'

function BottonPageData(props){
    return (
        <div className='botton-card'>
            <div className='botton-image'>
                <img src={props.image} alt='image'/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default BottonPageData