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
								id: company.socials[key].social,
								url: company.socials[key].link
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
					<Aux>
						{/*userAvaliable && 
						*/}
							<Link to='/companies/new' className='Add'>
								<div className='Add-Company'></div>
							</Link>
					</Aux>
				</div>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
		companies: state.company.companies,
		faSocials: state.company.faSocials,
        userAvaliable: state.user.userAvaliable
	}
}
const mapDispatchToProps = dispatch =>{
	return {
 		onInit: ()=>dispatch(actions.getCompaniesRequest())
 	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Companies);