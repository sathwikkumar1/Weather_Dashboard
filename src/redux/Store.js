import { createStore, applyMiddleware } from 'redux';
import { thunk as thunk} from 'redux-thunk';

const initialState = {
  weatherData: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return { ...state, weatherData: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, weatherData: null, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
