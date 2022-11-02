import Header from '../src/header/header';
import Body from '../src/body/body';
import Footer from '../src/footer/footer';
import './App.css';

const App = () => {
    return(
        <center className='app'>
            <div className='head'><Header /></div>
            <div className='body'><Body /></div>
            <div className='foot'><Footer /></div>
        </center>
    )
}

export default App;

