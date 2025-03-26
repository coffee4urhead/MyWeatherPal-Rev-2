import Navigation from "./Navigation"
import CaptionComponent from "./CaptionComponent"
import Card from "./Card.tsx"
import CTA from "./CTA"
import CampaignCarousel from "./CampaignCarousel.tsx"

import "../../compiled-css-code/home-comp-styles/home-style.css"

import heroImage from '../../assets/images/hero-sect-image.png'
import chillImage from '../../assets/images/chill-image.png'
import map from '../../assets/images/map.png'

import certificate from '../../assets/images/certificate.png'
import dove from '../../assets/images/dove.png'
import fosterFamily from '../../assets/images/foster-family.png'

export default function Home() {


    return (
        <>
            <Navigation />
            <CaptionComponent
                caption="Your reliable information on the go"
                captionContent="Step into the world of weather with our intuitive and feature-rich application. Whether you're planning your next adventure or simply want to stay informed about the forecast in your area, our app provides accurate and up-to-date weather information at your fingertips."
                captionImage={heroImage}
                layout="side"
                imagePosition="right"
            />
            <article id='cards-container'>
                <Card
                    title="We bring valuable information"
                    content="Keeping an eye on the weather on a day-to-day basis is our job"
                    icon={certificate}
                />
                <Card
                    title="With love to our community"
                    content="We value our customers. We always strive for better user experience"
                    icon={fosterFamily}
                />
                <Card
                    title="We offer personal development"
                    content="Join our campaigns and help the planet. Develop your personalality"
                    icon={dove}
                />
            </article>
            <CaptionComponent
                caption="How we gather our information"
                captionContent="We have gathered a team of professionals who help us process the information that is presented to you. The team offers intern positions and we are always open for newcomers"
                captionImage={chillImage}
                layout="top"
                imagePosition="right"
            />
            <CTA/>
            <CaptionComponent
                caption="How we gather our information"
                captionContent="We have gathered a team of professionals who help us process the information that is presented to you. The team offers intern positions and we are always open for newcomers"
                captionImage={map}
                layout="side"
                imagePosition="left"
            />
            <CampaignCarousel />
        </>
    )
}