import './game.css';
import projectsIcon from './images/projects.png';

const Game = () => {
    return (<>
    <div className='projects'>
    <div className='icon'><img src={projectsIcon} className='skills' alt='myProjects'/></div>
        <div className='project'>
        <div className='show'>
            show
        </div>
        <frames className='menu'>
        <ul>
        <li>projectName</li>
        </ul>
        </frames>
        </div>
    </div>
        </>)
}

export default Game;