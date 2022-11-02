import './body.css';
import Info from './containers/info/info';
import Skills from './containers/skills/skills';
import Game from './containers/game/game';
const body = () => {
    return (<>
                <div className='info'><Info /></div>
                <div className='skills'><Skills /></div>
                <div className='game'><Game /></div>
    </>)
}

export default body;