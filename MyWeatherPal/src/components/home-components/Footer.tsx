import {
    FaTiktok,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { Link } from "react-router-dom"
import '../../compiled-css-code/home-comp-styles/footer-comp-styles/footer-style.css';
import guy from '../../assets/images/guy.png'
import { useState } from 'react';

export default function Footer() {
    const [message, setMessage] = useState('');
    
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        
        const subject = "Message from MyWeatherPal";
        const body = message;
        const mailtoLink = `mailto:myweatherpal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        setMessage('');
    };

    return (
        <footer id='footer-section'>
            <section id='invoice-section'>
                <div className='invoice-section-items'>
                    <h1>MyWeatherPal</h1>

                    <form className='input-section' onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            placeholder='Invoice us at our own email' 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>

                    <div id='icons-holder'>
                        <div className='icon-frame'><a href='https://www.facebook.com/mihail.mihajlov.507/' target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a></div>
                        <div className='icon-frame'><a href='https://www.facebook.com/mihail.mihajlov.507/' target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a></div>
                        <div className='icon-frame'><a href='https://www.facebook.com/mihail.mihajlov.507/' target="_blank" rel="noopener noreferrer"><FaTiktok className="icon" /></a></div>
                        <div className='icon-frame'><a href='https://www.facebook.com/mihail.mihajlov.507/' target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a></div>
                        <div className='icon-frame'><a href='https://www.linkedin.com/in/mihail-mihailov-3b6255334/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a></div>
                    </div>
                </div>
                <img id='footer-image' src={guy} alt='A guy holding an umbrella' />
            </section>

            <section id='further-details-section'>
                <div className='further-details'>
                    <Link to='/terms-and-services' onClick={(e) => { e.preventDefault(); openInNewTab('/terms-and-services'); }}>Terms and services</Link>
                    <Link to='#' onClick={(e) => { e.preventDefault(); openInNewTab('#'); }}>Users guide</Link>
                    <Link to='#' onClick={(e) => { e.preventDefault(); openInNewTab('#'); }}>FAQs</Link>
                </div>
                <div className='website-information'>
                    <p>© 2025-2030 MyWeatherPal LTD All rights reserved</p>
                    <p>MyWeatherPal System Source 2.0.1122</p>
                </div>
            </section>
        </footer>
    );
}