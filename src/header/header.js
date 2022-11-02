import './header.css';
import linkden from './images/linkedin.png';
import whatsapp from './images/whatsapp.png';
const header = () => {
    let whatsappLink = 'https://wa.link/ub03n6';
    let linkdenLink = 'https://www.linkedin.com/in/mf-profile';
    return (<>
    <div className="head">
        <h1>profile</h1>
        <div className="headBtns">
        <a href={linkdenLink}><img src={linkden} width='15px' alt='linkedin_icon'></img>
</a>
<a href={whatsappLink}><img src={whatsapp} width='15px' alt='whatsapp_icon'></img></a>
        </div>
    </div>
    </>)
}

export default header;