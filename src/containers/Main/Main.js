import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxillary/Auxillary';
import GuardRoute from '../../hoc/GuardRoute/GuardRoute';
import Home from '../../components/Home/Home';
import Intro from '../../components/Intro/Intro';
import SignUp from '../../components/User/SignUp';
import Login from '../../components/User/Login';
import Logout from '../../components/User/Logout';
import Companies from '../../components/Company/CompaniesPage/Companies';
import NewCompany from '../../components/Company/CompanyForm/NewCompany';
import EditCompany from '../../components/Company/CompanyForm/EditCompany';
import Company from '../../components/Company/CompanyPage/Company';
import Competition from '../../components/Company/CompanyPage/Competition/CompetitionPage/Competition';
import NewCompetition from '../../components/Company/CompanyPage/Competition/CompetitionForm/NewCompetition';
import EditCompetition from '../../components/Company/CompanyPage/Competition/CompetitionForm/EditCompetition';
import NewCategory from '../../components/Company/CompanyPage/Competition/CompetitionPage/CategoryForm/NewCategory';
import EditCategory from '../../components/Company/CompanyPage/Competition/CompetitionPage/CategoryForm/EditCategory';
import NewContestant from '../../components/Company/CompanyPage/Competition/CompetitionPage/ContestantForm/NewContestant';
import EditContestant from '../../components/Company/CompanyPage/Competition/CompetitionPage/ContestantForm/EditContestant';
import NotFound from '../../components/Error/Not-Found';

class Main extends Component {
    state = {}
	render(){
		const { userAvaliable } = this.props;
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
					<GuardRoute
						path='/companies/new'
						exact
						auth={userAvaliable}
						referrer='Create a New Company'
						component={()=><NewCompany />}
					/>
					<GuardRoute
						path='/company/:companyId/edit'
						exact
						auth={userAvaliable}
						referrer='Edit Company'
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
					<GuardRoute
						path='/company/:companyId/competitions/new'
						exact
						auth={userAvaliable}
						referrer='Create a New Competition'
						component={()=><NewCompetition />}
					/>
					<GuardRoute
						path='/company/:companyId/competition/:competitionId/edit'
						exact
						auth={userAvaliable}
						referrer='Edit Competition'
						component={()=><EditCompetition />}
					/>
					<GuardRoute
						path='/company/:companyId/competition/:competitionId/categories/new'
						exact
						auth={userAvaliable}
						referrer='Create a New Category'
						component={()=><NewCategory />}
					/>
					<GuardRoute
						path='/company/:companyId/competition/:competitionId/category/:categoryId/edit'
						exact
						auth={userAvaliable}
						referrer='Edit Category'
						component={()=><EditCategory />}
					/>
					<GuardRoute
						path='/company/:companyId/competition/:competitionId/category/:categoryId/contestants/new'
						exact
						auth={userAvaliable}
						referrer='Create a New Contestant'
						component={()=><NewContestant />}
					/>
					<GuardRoute
						path='/company/:companyId/competition/:competitionId/category/:categoryId/contestant/:contestantId/edit'
						exact
						auth={userAvaliable}
						referrer='Edit Contestant'
						component={()=><EditContestant />}
					/>
                    <Route
                        path='/logout'
                        exact
                        component={()=><Logout />}
                    />
					<Route component={()=><NotFound />} />
				</Switch>				
			</Aux>
			);
	}
}
const mapStateToProps = state =>{
    return {
    	userAvaliable: state.user.userAvaliable
    };
}
export default connect(mapStateToProps, null)(Main);