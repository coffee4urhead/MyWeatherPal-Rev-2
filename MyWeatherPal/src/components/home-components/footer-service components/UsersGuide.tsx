import Navigation from "../Navigation";

export default function UsersGuide() {
    return (
        <>
            <Navigation />
            <article className="user-guide">
                <header className="guide-header">
                    <h1>MyWeatherPal User Guide</h1>
                    <p className="subtitle">Your Personal Weather Companion</p>
                </header>

                <section className="guide-section" aria-labelledby="getting-started">
                    <h2 id="getting-started">1. Getting Started</h2>
                    <p>Welcome to MyWeatherPal! Our application provides accurate, real-time weather forecasts to help you plan your day with confidence.</p>
                    
                    <section className="feature-list" aria-labelledby="key-features">
                        <h3 id="key-features">Key Features:</h3>
                        <ul>
                            <li><strong>Hourly & Daily Forecasts</strong> - Plan your day with precision</li>
                            <li><strong>Severe Weather Alerts</strong> - Stay informed about dangerous conditions</li>
                            <li><strong>Custom Location Tracking</strong> - Save your favorite places</li>
                            <li><strong>Feels-Like Temperature</strong> - Know what the weather actually feels like</li>
                            <li><strong>Sunrise/Sunset Times</strong> - Perfect for photographers and outdoor enthusiasts</li>
                        </ul>
                    </section>
                </section>

                <section className="guide-section" aria-labelledby="navigation">
                    <h2 id="navigation">2. Navigation</h2>
                    
                    <article className="subsection" aria-labelledby="home-screen">
                        <h3 id="home-screen">Home Screen</h3>
                        <ul>
                            <li>Tap the <strong>location icon</strong> to enable GPS or search for locations manually</li>
                            <li>Swipe left/right to view hourly forecasts</li>
                            <li>Scroll down for 7-day forecasts</li>
                        </ul>
                    </article>

                    <article className="subsection" aria-labelledby="menu-options">
                        <h3 id="menu-options">Menu Options</h3>
                        <ul>
                            <li><strong>Saved Locations</strong>: Manage your favorite places</li>
                            <li><strong>Settings</strong>: Customize units (°C/°F, km/mi)</li>
                            <li><strong>Notifications</strong>: Configure weather alerts</li>
                        </ul>
                    </article>
                </section>

                <section className="guide-section" aria-labelledby="weather-data">
                    <h2 id="weather-data">3. Understanding Weather Data</h2>
                    
                    <article className="subsection" aria-labelledby="weather-icons">
                        <h3 id="weather-icons">Weather Icons</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>☀️</td>
                                    <td>Clear sky</td>
                                </tr>
                                <tr>
                                    <td>⛅</td>
                                    <td>Partly cloudy</td>
                                </tr>
                                <tr>
                                    <td>🌧️</td>
                                    <td>Rain</td>
                                </tr>
                                <tr>
                                    <td>⚡</td>
                                    <td>Thunderstorm</td>
                                </tr>
                                <tr>
                                    <td>❄️</td>
                                    <td>Snow</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    <article className="subsection" aria-labelledby="advanced-metrics">
                        <h3 id="advanced-metrics">Advanced Metrics</h3>
                        <ul>
                            <li><strong>UV Index</strong>: Sun protection recommendations (1-10+)</li>
                            <li><strong>Humidity</strong>: Relative moisture in the air</li>
                            <li><strong>Wind Speed/Direction</strong>: Arrow shows wind flow</li>
                        </ul>
                    </article>
                </section>

                <section className="guide-section" aria-labelledby="safety-tips">
                    <h2 id="safety-tips">4. Safety Tips</h2>
                    <div role="alert" className="safety-alert">
                        <p><strong>When You See Red Alerts:</strong></p>
                        <ul>
                            <li>Seek shelter immediately during thunderstorms</li>
                            <li>Avoid travel during blizzard warnings</li>
                            <li>Stay hydrated in extreme heat warnings</li>
                        </ul>
                    </div>
                </section>

                <footer className="guide-footer">
                    <h2>Need Help?</h2>
                    <p>Contact our support team:</p>
                    <address>
                        <p>📧 <a href="mailto:support@myweatherpal.com">support@myweatherpal.com</a></p>
                        <p>☎️ <a href="tel:+18009328437">+1 (800) WEATHER</a></p>
                    </address>
                </footer>
            </article>
        </>
    );
}