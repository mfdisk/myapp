import './footer.css';
import whatsappBtn from './images/whatsapp_btn.png'

const footer = () => {
    let whatsappLin = 'https://wa.link/ub03n6';
    return (<>
    <div className="foot">
        <p className='des'>copyright@{new Date().getFullYear()}</p>
        <div className='floatingWhatsappBtn'>
            <a href={whatsappLin}>
                <img src={whatsappBtn}></img>
                <p></p>
                </a>
        </div>
    </div>
    </>)
}

export default footer;