import skillsIcon from './images/skills.png';
import './skills.css';
const Skills = () => {
    return (<>
    <div className='main'>
    <div className='container'>
        <img src={skillsIcon} className='skills'/>
    </div>
    <ul className='skillsTable'>
        <li className='html'>html5</li>
        <li className='css'>css5</li>
        <li className='js'>javaScript</li>
        <li className='sass'>sass</li>
        <li className='mongo'>mongo.db</li>
        <li className='react'>react</li>
        <li className='node'>node.js</li>
    </ul>
    <ul className='moreSkills'>
        <li>MERN-STACK web-devolober</li>
        <li>android-2,3D-Apps C#-UNITY</li>
        <li>web-designer</li>
        <li>motion-graphics</li>
    </ul>
    </div>
        </>)
}

export default Skills;