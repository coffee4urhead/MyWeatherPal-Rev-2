

import "../../../compiled-css-code/home-comp-styles/footer-comp-styles/footer-service-style.css"

import Navigation from "../Navigation";

import personWalkingImage from "../../../assets/images/person-walking.svg";
import personAnalysing from "../../../assets/images/person-analysing.png";

export default function TermsAndServices() {
    const lastUpdatedDate = "June 15, 2024";

    return (
        <>
                <Navigation />
                <div id='head-sect'>
                    <h1>MyWeatherPal Terms of Service</h1>
                    <p>Last updated: {lastUpdatedDate}</p>
                </div>
                <main id='text-cont'>
                    <section className='service-point'>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing or using MyWeatherPal ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree, please discontinue use immediately.</p>
                    </section>
                    <section className='service-point'>
                        <h2>2. Service Description</h2>
                        <p>MyWeatherPal provides weather forecasts, alerts, and related information ("Content") for general informational purposes only. We do not guarantee accuracy, completeness, or timeliness of data.</p>
                    </section>
                    <section className='service-point'>
                        <h2>3. User Responsibilities</h2>
                        <p>You agree to:</p>
                        <ol>
                            <li>Use the Service only for lawful purposes</li>
                            <li>Not exploit weather data for life-critical decisions (e.g., aviation, emergency response)</li>
                        </ol>
                    </section>
                    <section className='service-point'>
                        <h2>4. Limitations of Liability</h2>
                        <p>MyWeatherPal shall not be liable for:</p>
                        <ol>
                            <li>Damages from reliance on weather information</li>
                            <li>Service interruptions or inaccuracies</li>
                            <li>Third-party actions (e.g., data providers like NOAA)</li>
                        </ol>
                    </section>
                    <section className='service-point'>
                        <h2>7. Intellectual Property</h2>
                        <p>All weather data visualizations, logos, and interface designs are owned by MyWeatherPal LTD. You may not:</p>
                        <ol>
                            <li>Scrape or redistribute our data commercially</li>
                            <li>Reverse-engineer our algorithms</li>
                        </ol>
                    </section>
                    <section className='service-point'>
                        <h2>9. Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms. Continued use constitutes acceptance.</p>
                    </section>
                </main>
                <div id='absolute-container'>
                    <img className="service-images" src={personWalkingImage} alt='A walking person image' />
                    <img className="service-images" src={personAnalysing} alt='A person analysing' />
                </div>
        </>
    )
}