import Navigation from "./Navigation"
import CaptionComponent from "./CaptionComponent"
import "../../compiled-css-code/home-comp-styles/home-style.css"
import heroImage from '../../assets/images/hero-sect-image.png';

export default function Home() {


    return (
        <>
            <Navigation />
            <CaptionComponent
                caption="Your reliable information on the go"
                captionContent="MyWeatherPal offers the information you need anywhere, anytime you want it"
                captionImage={heroImage}
                layout="side"
                imagePosition="right"
            />
        </>
    )
}