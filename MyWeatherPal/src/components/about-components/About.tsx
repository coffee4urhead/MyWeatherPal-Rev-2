
import Navigation from "../home-components/Navigation";
import Footer from "../home-components/Footer";
import CaptionComponent from "../home-components/CaptionComponent";
import FAQ from "./FAQ";

import AboutUsImage from "../../assets/images/about-us-image.png";

export default function About() {
    return (
        <>
            <Navigation />
            <main id='main-cont'>
                <CaptionComponent
                    caption="We are more than a team"
                    captionContent="We have teamed up with professionals across different countries trying to personilise the feeling of everybody"
                    captionImage={AboutUsImage}
                    layout="side"
                    imagePosition="left"
                />

                <FAQ/>
            </main>
            <Footer />
        </>
    );
}