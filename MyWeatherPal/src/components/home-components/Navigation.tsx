import '../../compiled-css-code/navigation-comp-styles/navigation-style.css';

export default function Navigation() {
    return (
        <>
            <header id="head-sect">
                <h1>MyWeatherPal</h1>
                <section className="nav-sect">
                    <a href='#'>Weather Page</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Home</a>
                </section>
            </header>
        </>
    )
}
