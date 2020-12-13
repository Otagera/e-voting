import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxillary/Auxillary';
import Home from '../../components/Home/Home';
import Intro from '../../components/Intro/Intro';
import SignUp from '../../components/User/SignUp';
import Login from '../../components/User/Login';
import Companies from '../../components/Company/CompaniesPage/Companies';
import NewCompany from '../../components/Company/CompanyForm/NewCompany';
import EditCompany from '../../components/Company/CompanyForm/EditCompany';
import Company from '../../components/Company/CompanyPage/Company';
import Competition from '../../components/Company/CompanyPage/Competition/CompetitionPage/Competition';
import NewCompetition from '../../components/Company/CompanyPage/Competition/CompetitionForm/NewCompetition';
import EditCompetition from '../../components/Company/CompanyPage/Competition/CompetitionForm/EditCompetition';
import NewCategory from '../../components/Company/CompanyPage/Competition/CompetitionPage/CategoryForm/NewCategory';
import EditCategory from '../../components/Company/CompanyPage/Competition/CompetitionPage/CategoryForm/EditCategory';
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
						path='/companies/new'
						exact
						component={()=><NewCompany />}
					/>
					<Route
						path='/company/:companyId/edit'
						exact
						component={()=><EditCompany />}
					/>
					<Route
						path='/company/:companyId'
						exact
						component={()=><Company />}
					/>
					<Route
						path='/company/:companyId/competition/:competitionId'
						exact
						component={()=><Competition />}
					/>
					<Route
						path='/company/:companyId/competitions/new'
						exact
						component={()=><NewCompetition />}
					/>
					<Route
						path='/company/:companyId/competition/:competitionId/edit'
						exact
						component={()=><EditCompetition />}
					/>
					<Route
						path='/company/:companyId/competition/:competitionId/categories/new'
						exact
						component={()=><NewCategory />}
					/>
					<Route
						path='/company/:companyId/competition/:competitionId/category/:categoryId/edit'
						exact
						component={()=><EditCategory />}
					/>
					<Route component={()=><NotFound />} />
				</Switch>				
			</Aux>
			);
	}
}
export default Main;