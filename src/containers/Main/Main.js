import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxillary/Auxillary';
import Home from '../../components/Home/Home';
import Intro from '../../components/Intro/Intro';
import SignUp from '../../components/User/SignUp';
import Login from '../../components/User/Login';
import Companies from '../../components/Company/Companies';
import Competitions from '../../components/Company/Competition/Competitions';
import NotFound from '../../components/Error/Not-Found';

class Main extends Component {
    state = {

    }
	render(){
		return (
			<Aux>
				<Switch>
					<Redirect from='/' exact to='/home' />
					<Route 
						path='/home'
						exact
						component={()=><Home />}
					/>
					<Route 
						path='/intro'
						exact
						component={()=><Intro />}
					/>
					<Route 
						path='/signup'
						exact
						component={()=><SignUp />}
					/>
					<Route
						path='/login'
						exact
						component={()=><Login />}
					/>
					<Route
						path='/companies'
						exact
						component={()=><Companies />}
					/>
					<Route
						path='/competitions'
						exact
						component={()=><Competitions />}
					/>
					<Route component={()=><NotFound />} />
				</Switch>				
			</Aux>
			);
	}
}
export default Main;