import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const gatherSurveyInfo = (state=[], action)=>{
    if(action.type === `GATHER_SURVEY_INFO`){
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        gatherSurveyInfo
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
