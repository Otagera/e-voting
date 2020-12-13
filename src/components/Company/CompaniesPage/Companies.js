import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Company from './Company';
import Loader from '../../UI/Loader/Loader';
import * as actions from '../../../store/actions/index';

class Companies extends Component {
    state = {
    	error: false
    }
    componentDidMount(){
    	this.props.onInit();
    }
	render(){
		const { companies, faSocials } = this.props;
		const { error } = this.state;
		let display = null;
		if(!companies){
			display = <Loader/>;
		}else if(error){
			display = <p>Some shit happened bruh!!!</p>
		}else if(companies.length <= 0){
			display = <p>No Company To Display</p>
		}else {
			display = (<Aux>
				{
					companies.map((company)=>{
						let socials = [];
						for(let key in company.socials){
							socials.push({
								id: key,
								url: company.socials[key]
							});
						}
						return (<Company 
									company={company}
									socials={socials}
									faSocials={faSocials}
									key={company.fakeId} />)
					})
				}
			</Aux>);
		}
		return (
			<section className='Companies'>
				<div className='Companies-Top'>
					<Link to='/companies/new'>
						<div className='Add-Company'></div>
					</Link>
				</div>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
		companies: state.company.companies,
		faSocials: state.company.faSocials
	}
}
const mapDispatchToProps = dispatch =>{
	return {
 		onInit: ()=>dispatch(actions.getCompaniesRequest())
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Companies);