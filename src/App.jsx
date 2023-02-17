import { React } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';
import './sass/index.scss';
import CvForm from './pages/CvForm';
import Router from './routers';

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
