import { React } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';
import './sass/index.scss';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;
