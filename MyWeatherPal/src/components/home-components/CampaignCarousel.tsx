import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import mezekRun from '../../assets/images/mezek-run.png';
import africa from '../../assets/images/africa.jpg';
import asia from '../../assets/images/asia.jpg';

import '../../compiled-css-code/home-comp-styles/carousel-comp-styles/carousel-style.css';

export default function CampaignCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true
    };

    return (
        <article id='campaign-carousel' style={{ width: "50rem", margin: "0 auto" }}>
            <h1>Current campaigns</h1>
            <Slider {...settings}>
                <div className="slide-container">
                    <img src={mezekRun} alt="Slide 1" className="slide-image" />
                    <section className='carousel-content'>
                        <h3>Mezek Run</h3>
                        <p>Administered by local people this campaign helps people socialise and clean the nature while keeping competitive</p>
                        <button>Join now</button>
                    </section>
                </div>
                <div className="slide-container">
                    <img src={africa} alt="Slide 1" className="slide-image" />
                    <section className='carousel-content'>
                        <h3>The African Drought Crisis</h3>
                        <p>Over 250 million Africans face water scarcity daily. Our drought resilience programs provide sustainable solutions to vulnerable communities. Every $30 gives one person clean water for a year.</p>
                        <button>Join now</button>
                    </section>
                </div>
                <div className="slide-container">
                    <img src={asia} alt="Slide 1" className="slide-image" />
                    <section className='carousel-content'>
                        <h3>Overpollution in Asia</h3>
                        <p>Join our campaign to combat the 8 million tons of plastic entering Asian oceans annually. We're working with local communities to install river barriers and promote waste management education. </p>
                        <button>Join now</button>
                    </section>
                </div>
            </Slider>
        </article>
    );
}