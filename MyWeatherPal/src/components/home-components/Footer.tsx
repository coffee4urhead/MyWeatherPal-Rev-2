import {
    FaTiktok,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import '../../compiled-css-code/home-comp-styles/footer-comp-styles/footer-style.css';
import guy from '../../assets/images/guy.png'

export default function Footer() {
    return (
        <footer id='footer-section'>
            <section id='invoice-section'>
                <div className='invoice-section-items'>
                    <h1>MyWeatherPal</h1>
                    <div className='input-section'>
                        <input type='text' placeholder='Invoice us at our own email' />
                        <button>Send</button>
                    </div>
                    <div id='icons-holder'>
                        <div className='icon-frame'><FaFacebook className="icon" /></div>
                        <div className='icon-frame'><FaInstagram className="icon" /></div>
                        <div className='icon-frame'><FaTiktok className="icon" /></div>
                        <div className='icon-frame'><FaTwitter className="icon" /></div>
                        <div className='icon-frame'><FaLinkedin className="icon" /></div>
                    </div>
                </div>
                <img id='footer-image' src={guy} alt='A guy holding an umbrella' />
            </section>

            <section id='further-details-section'>
                <div className='further-details'>
                    <a>Terms and services</a>
                    <a>Users guide</a>
                    <a>FAQs</a>
                </div>
                <div className='website-information'>
                    <p>© 2025-2030 MyWeatherPal LTD All rights reserved</p>
                    <p>MyWeatherPal System Source 2.0.1122</p>
                </div>
            </section>
        </footer>
    );
}