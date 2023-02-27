import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import cvIcon from '../../assets/icons/cvTool.svg';
import './header.scss';

function Header() {
    const naviagte = useNavigate();
    return (
        <div className="header">
            <div className="header-icon">
                <img src={cvIcon}></img>
            </div>
            <div className="header-item">
                <div>About</div>
                <div
                    onClick={() => {
                        naviagte('../form');
                    }}
                >
                    Create CV
                </div>
                <div
                    onClick={() => {
                        naviagte('../template');
                    }}
                >
                    Template
                </div>
                <div className="header-item__contact">Contact Me</div>
            </div>
        </div>
    );
}

export default Header;
