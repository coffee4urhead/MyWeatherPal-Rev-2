import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Forecast } from './WeatherPage';

import "../../compiled-css-code/weather-comp-styles/weather-chart-style.css";

interface WeatherChartsProps {
  forecast: Forecast;
}

export default function WeatherCharts({ forecast } : WeatherChartsProps) {
  const chartData = forecast.forecastday[0].hour.map(hour => ({
    time: hour.time.split(' ')[1], 
    tempC: hour.temp_c,
    tempF: hour.temp_f,
    windKph: hour.wind_kph,
    windMph: hour.wind_mph,
    precip: hour.precip_mm
  })) || [];

  return (
    <div className="weather-charts">
      <div className="chart-container">
        <h3>Temperature (°C and °F)</h3>
        <ResponsiveContainer width="100%" height='100%'>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" label={{ value: '°C', angle: -90, position: 'insideLeft' }}/>
            <YAxis yAxisId="right" orientation="right" label={{ value: '°F', angle: 90, position: 'insideRight' }}/>
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="tempC" 
              stroke="#ff6384" 
              name="Temperature (°C)" 
              dot={false}
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="tempF" 
              stroke="#36a2eb" 
              name="Temperature (°F)" 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Wind Speed (kph and mph)</h3>
        <ResponsiveContainer width="100%" height='100%'>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" label={{ value: 'kph', angle: -90, position: 'insideLeft' }}/>
            <YAxis yAxisId="right" orientation="right" label={{ value: 'mph', angle: 90, position: 'insideRight' }}/>
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="windKph" 
              stroke="#4bc0c0" 
              name="Wind (kph)" 
              dot={false}
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="windMph" 
              stroke="#9966ff" 
              name="Wind (mph)" 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Precipitation (mm)</h3>
        <ResponsiveContainer width="100%" height='100%'>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis label={{ value: 'mm', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="precip" 
              fill="#ffcd56" 
              name="Precipitation (mm)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}