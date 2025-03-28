
import "../../compiled-css-code/about-comp-styles/faq-comp-styles/faq-style.css";

export default function FAQ() {
    return (
        <>
            <section id="faq-cont"> 
                <h1>FAQs</h1>
                <ol>
                    <li>
                        <details>
                            <summary>How often is the weather data updated?</summary>
                            <p>Our forecasts are updated every 15-30 minutes using real-time data from global meteorological sources. Severe weather alerts are instant.</p>
                        </details>
                    </li>
                    <li><details>
                        <summary>How accurate are your forecasts?</summary>
                        <p>We provide 90%+ accuracy for 1-3 day forecasts and 80%+ for 5-7 days, verified by NOAA and ECMWF. Accuracy drops slightly for long-range predictions.</p>
                    </details></li>
                    <li>
                        <details>
                            <summary>What sources do you use for weather data?</summary>
                            <p>We aggregate data from NOAA, ECMWF, and local weather stations, enhanced by proprietary AI models.</p>
                        </details>
                    </li>
                </ol>
            </section>
        </>
    )
}