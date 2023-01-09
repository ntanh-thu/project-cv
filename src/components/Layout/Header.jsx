import { React } from 'react';
import cvIcon from '../../assets/icons/cvTool.svg';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header-icon">
                <img src={cvIcon}></img>
            </div>
            <div className="header-item">
                <div>About</div>
                <div>Portfolio</div>
                <div className="header-item__contact">Contact Me</div>
            </div>
        </div>
    );
}

export default Header;
