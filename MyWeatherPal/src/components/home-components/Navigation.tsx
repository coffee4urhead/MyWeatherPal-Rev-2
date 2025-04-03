import { NavLink } from 'react-router-dom';
import '../../compiled-css-code/navigation-comp-styles/navigation-style.css';

export default function Navigation() {
    return (
        <header id="head-sect">
            <div className="header-content">
                <h1>MyWeatherPal</h1>
                <section className="nav-sect">
                    <NavLink
                        to="/weather"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Weather Page
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Home
                    </NavLink>
                </section>
            </div>
        </header>
    )
}
