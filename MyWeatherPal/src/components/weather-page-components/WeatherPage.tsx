import { useState } from 'react';

import Navigation from "../home-components/Navigation";
import Footer from "../home-components/Footer";
import WeatherCharts from './WeatherCharts';
import "../../compiled-css-code/weather-comp-styles/weather-style.css";

interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
  }
  
  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }
  
  interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
  }
  
  interface Hour {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    snow_cm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
  }
  
  interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: WeatherCondition;
    uv: number;
  }
  
  interface ForecastDay {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
  }
  
  export interface Forecast {
    forecastday: ForecastDay[];
  }
  
  export interface WeatherData {
    weatherData: Location | Forecast;
    location: Location;
    forecast: Forecast;
  }

export default function WeatherPage() {
    const [searchVal, setSearchVal] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherData = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!searchVal.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const today = new Date();
            const dateString = today.toISOString().split('T')[0];
            
            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}key=${import.meta.env.VITE_WEATHER_KEY}&q=${searchVal}&dt=${dateString}`
            );

            if (!response.ok) {
                throw new Error('City not found or API error');
            }

            const data: WeatherData = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            setWeatherData(null);
        } finally {
            setLoading(false);
            console.log(weatherData);
        }

    };

    return (
        <>
            <Navigation/>
            <main className="weather-container">
                <form onSubmit={fetchWeatherData}>
                    <input 
                        type='text' 
                        value={searchVal} 
                        onChange={(e) => setSearchVal(e.target.value)}
                        placeholder='Search the weather based on cities'
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Searching...' : 'Search weather'}
                    </button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {weatherData && (
                    <div className="weather-results">
                        <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
                        <img 
                                src={weatherData.forecast.forecastday[0].day.condition.icon} 
                                alt={weatherData.forecast.forecastday[0].day.condition.text}
                            />
                            <p>Local Time: {weatherData.location.localtime}</p>
                            <p>Temperature: {weatherData.forecast.forecastday[0].day.avgtemp_c}°C</p>
                            <p>Condition: {weatherData.forecast.forecastday[0].day.condition.text}</p>
                            <p>Humidity: {weatherData.forecast.forecastday[0].day.avghumidity}%</p>
                            <p>Wind: {weatherData.forecast.forecastday[0].day.maxwind_kph} km/h</p>
                        <div className="weather-details">

                            <WeatherCharts forecast={weatherData.forecast} />
                        </div>
                    </div>
                )}
            </main>
            <Footer/>
        </>
    )
}