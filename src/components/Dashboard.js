import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../actions/WeatherAction';
import EventPlanner from './EventPlanner';

const Dashboard = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)
  const weatherData = useSelector(state => state.weatherData);
  const error = useSelector(state => state.error);

  const handleFetchWeather = async () => {
    setLoader(true)
    await dispatch(getWeatherData(location));
    setLoader(false)
    setLocation("")
  };

  return (
    <div className="dashboard">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className='form-control w-25 d-inline'
      />
      <button onClick={handleFetchWeather} className='btn btn-primary'>Get Weather</button>
      {error && <p>{error}</p>}
     <div className='mt-3'>
     {loader ? <div class="spinner-border text-info "></div> : weatherData && (
       <>
        <div className='container  '>
            <div className='row '>
               
            <div className='col-12 card d-flex flex-row justify-content-around weather_bg text-light'>
              
                <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4>Weather forecast of <span className='text-warning'>{weatherData.name}</span></h4>
                <h4><span style={{marginRight:"8px", fontSize:"25px"}} className='text-info'><i class="fa-solid fa-location-pin"></i></span>{weatherData.name}</h4>
                <p><span style={{marginRight:"8px", fontSize:"25px"}} className='text-info'><i class="fa-solid fa-temperature-three-quarters"></i></span>Temperature: {weatherData.main.temp}°C</p>
                <p><span style={{marginRight:"8px", fontSize:"25px"}} className='text-info'><i class="fa-solid fa-fan"></i></span>Condition: {weatherData.weather[0].description}</p>
                </div>
                <EventPlanner/>


            </div>

            </div>

        </div>
        
      
     </>
      )}
     </div>
    </div>
  );
};

export default Dashboard;
