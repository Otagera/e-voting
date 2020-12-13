import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Competitions from './Competition/CompetitionsPage/Competitions.js';
import * as actions from '../../../store/actions/index'
import Loader from '../../UI/Loader/Loader';

class Company extends Component {
    state = {}
	componentDidMount(){
		this.props.onInit(+this.props.match.params.companyId);
	}
	render(){
		const { selectedCompany } = this.props;
		let display = null;
		if(!selectedCompany){
			display = <Loader />
		/*}else if(Object.keys(selectedCompany).length === 0){
			display = <p>Something Went Terribly Wrong!!! </p>
		*/}else {
			display = (
				<Aux>
					<div className='Company-Top'>
						<img src={selectedCompany.img} alt={selectedCompany.name} />
						<h1>{selectedCompany.name}</h1>
						<p>{selectedCompany.desc}</p>
						<Link to={`/company/${this.props.match.params.companyId}/edit`} className='Edit-Btn'>
							<button> Edit Company Data </button>
						</Link>
						<Link to={`/company/${this.props.match.params.companyId}/competitions/new`} className='Add-Comp-Btn'>
							<button>Add Competition</button>
						</Link>
					</div>
					<Competitions competitions={selectedCompany.competitions} />
				</Aux>
			);
		}
		return (
			<section className='Company'>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
		selectedCompany: state.company.selectedCompany
	}
}

const mapDispatchToProps = dispatch =>{
	return {
 		onInit: (fakeId)=>dispatch(actions.getCompanyRequest(fakeId))
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Company));