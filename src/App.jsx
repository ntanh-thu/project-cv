import { React } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Router from './routers';
import './App.css';
import './sass/index.scss';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Router />
            <Footer></Footer>
        </div>
    );
}

export default App;
