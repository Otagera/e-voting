import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import companyReducer from './store/reducers/company';


if(process.env.NODE_ENV === 'development'){
	axios.defaults.baseURL = 'http://127.0.0.1:3003/api';
}else if(process.env.NODE_ENV === 'production'){
	//axios.defaults.baseURL = 'https://evening-wildwood-17350.herokuapp.com/api';
}
//axios.defaults.headers.common['Autorization'] = 'AUTH TOKEN';
axios.interceptors.request.use(request=>{
	return request;
}, error=>{
	console.log(error);
	return Promise.reject(error);
});

axios.interceptors.response.use(response=>{
	return response;
},error=>{
	console.log(error);
	return Promise.reject(error);
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	company: companyReducer
});

const logger = store => {
	return next =>{
		return action =>{
			const result = next(action);
			return result;
		}
	}
}

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(logger, thunk)
));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
