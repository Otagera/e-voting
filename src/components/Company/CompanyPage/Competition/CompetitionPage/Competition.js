import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Category from './Category';
import Accordion from '../../../../UI/Accordion/Accordion';
import Loader from '../../../../UI/Loader/Loader';
import SetVotingDeadline from '../../../../../services/setVotingDeadline';
import * as actions from '../../../../../store/actions/index.js';

class Competition extends Component {
    state = {}
	componentDidMount(){
		const { onInit, match } = this.props;
		onInit(+match.params.companyId, +match.params.competitionId);
	}
	render(){
		const { selectedCompany, selectedCompetition, faSocials, match, userAvaliable } = this.props;
		let display = null;
		if(!selectedCompetition){
			display = <Loader />
		}else if(Object.keys(selectedCompetition).length === 0){
			display = <p>No Competition To Display</p>
		}else {
			const { categories } = selectedCompetition;
    		let img = (selectedCompany && selectedCompany.img)? 
    					<img src={selectedCompany.img} alt="Company Logo" />:
    					<img alt="Company Logo" />
			display = (<Aux>
				<div className='Competition-Top'>
					{img}
					<h2>{selectedCompetition.name}</h2>
					<p>{selectedCompetition.description}</p>
					{userAvaliable && 
						<div className='Competition-Top-Btns'>
							<Link 
								to={`/company/${match.params.companyId}/competition/${match.params.competitionId}/edit`}
								className='Edit-Btn'>
								<button className='Button'> Edit Competition Data </button>
							</Link>
							<Link
								to={`/company/${match.params.companyId}/competition/${match.params.competitionId}/categories/new`}
								className='Edit-Btn'>
								<button className='Button'> Add a new category </button>
							</Link>
						</div>
					}
					<p> Voting { SetVotingDeadline(selectedCompetition.deadline)} </p>
				</div>
				<div className='Competition-Body'>
					<h3>Categories</h3>
					{
						categories.forEach((category)=>{
							category.title = category.name;
							category.component = Category;
							category.sentProps = {
								category: category,
								faSocials: faSocials
							};
						})
					}
					<Accordion data={categories}/>				
				</div>
			</Aux>);
		}
		return (
			<section className='Competition'>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
		selectedCompany: state.company.selectedCompany,
		selectedCompetition: state.company.selectedCompetition,
        userAvaliable: state.user.userAvaliable,
		faSocials: state.company.faSocials
	}
}

const mapDispatchToProps = dispatch =>{
	return {
 		onInit: (companyId, competitionId)=>dispatch(actions.getCompetitionRequest(companyId, competitionId))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Competition));