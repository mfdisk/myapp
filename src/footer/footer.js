import './footer.css';
import whatsappBtn from './images/whatsapp_btn.png'

const footer = () => {
    let whatsappLink = 'https://wa.link/ub03n6';
    return (<>
    <div className="foot">
        <p className='des'>copyright@{new Date().getFullYear()}</p>
        <div className='floatingWhatsappBtn'>
            <a href={whatsappLink}>
                <img src={whatsappBtn}></img>
                <p></p>
                </a>
        </div>
    </div>
    </>)
}

export default footer;