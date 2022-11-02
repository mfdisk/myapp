import myPic from './images/mypic.png';
import egFlag from './images/egyflag.png';
import './info.css';

let birth_year = 1993;
let dateNow = new Date().getFullYear();
let myAge = dateNow - birth_year;

const Skills = () => {
    return (<>
    <div className='body'>
    <div className="details">
        <div className='left'>
        <p className='paragraph'>Mahmoud Fouda<br/>
        {myAge}y, Egypt <img src={egFlag} className='egflagicon'></img></p>
        </div>
        <div className='right'>
        <img src={myPic} className='mypic'/>
        </div>
    </div>
    </div>
        </>)
}

export default Skills;