import '../../compiled-css-code/navigation-comp-styles/navigation-style.css';

export default function Navigation() {
    return (
        <header id="head-sect">
            <div className="header-content">
                <h1>MyWeatherPal</h1>
                <section className="nav-sect">
                    <a href='/weather'>Weather Page</a>
                    <a href='/about'>About Us</a>
                    <a href='/'>Home</a>
                </section>
            </div>
        </header>
    )
}
