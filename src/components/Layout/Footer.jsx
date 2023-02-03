import { React } from 'react';
import suf from '../../assets/imgs/Vectorsuf.png';
import './footer.scss';

function Footer() {
    const listContact = [
        {
            title: 'Github',
            icon: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/FFFFFF/external-github-social-media-tanah-basah-basic-outline-tanah-basah.png'
        },
        {
            title: 'Instagram',
            icon: 'https://img.icons8.com/material-outlined/48/FFFFFF/instagram-new--v1.png'
        },
        {
            title: 'Email',
            icon: 'https://img.icons8.com/material-outlined/48/FFFFFF/filled-message.png'
        },
        {
            title: 'Telep',
            icon: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png'
        }
    ];
    return (
        <>
            <div className="contact">
                <div className="contact-title">Contact Me</div>
                <div className="contact-icon">
                    {listContact.map((contact, index) => (
                        <div className="contact-icon-item" key={index}>
                            <span>
                                <img src={contact.icon} />
                            </span>
                            {contact.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <img src={suf}></img>
            </div>
        </>
    );
}

export default Footer;
