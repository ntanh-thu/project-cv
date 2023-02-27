import { React } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';
import './sass/index.scss';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
}

export default App;
