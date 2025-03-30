import { Link } from "react-router-dom";
import '../../compiled-css-code/home-comp-styles/cta-comp-styles/cta-style.css';
import volunteer from '../../assets/images/volunteering-image.png';

export default function CTA() {
    return (
        <article id='cta-container'>
            <h1 id='cta-header'>Join us now</h1>
            <img src={volunteer} alt='Volunteering illustration' className='cta-image' />

            <section id='button-holder'>
                <button className='cta-button'>Subscribe to the newsletter</button>
                <Link to="/weather" className='cta-button'>
                    <button>Learn the weather now</button>
                </Link>
            </section>
        </article>
    );
}