import React from 'react';
import { useSelector } from 'react-redux';

const EventPlanner = () => {
  const weatherData = useSelector(state => state.weatherData);

  return (
    <div className="event-planner d-flex flex-column justify-content-center align-items-start">
      <h4>Event Planner</h4>
      {weatherData && (
        <div className='d-flex flex-column justify-content-center align-items-start'>
          <p>Plan your events with the upcoming weather forecast</p>
          <span><span style={{marginRight:"8px"}} className='text-info'><i class="fa-solid fa-temperature-three-quarters"></i></span>Temperature: {weatherData.main.temp}°C</span>
          <p><span style={{marginRight:"8px"}} className='text-info'><i class="fa-solid fa-fan"></i></span>Condition: {weatherData.weather[0].description}</p>
        
        </div>
      )}
    </div>
  );
};

export default EventPlanner;
