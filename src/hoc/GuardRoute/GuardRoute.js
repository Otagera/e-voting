import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardRoute = ({ component: Component, auth, referrer, ...rest})=>{
	return (
		<Route {...rest} render={(props) =>(
			auth === true
				? <Component {...props} />
				: <Redirect to={{
					pathname: '/login',
					state: { referrer: referrer, redirectTo: rest.location.pathname }
				}}/>
			)} />
	)
}
export default GuardRoute;
//