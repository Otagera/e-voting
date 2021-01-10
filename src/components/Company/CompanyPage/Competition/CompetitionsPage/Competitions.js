import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Loader from '../../../../UI/Loader/Loader';
import Competition from './Competition';

class Competitions extends Component{
	inputRefs = {};
	setCompetitionRef = (ref, name) =>{
		this.inputRefs = {
			...this.inputRefs,
			[name]:{
				ref: ref
			}
		}
	}
	componentDidMount(){
		const { inputRefs, props } = this;
		if(Object.keys(inputRefs).length > 0 && props.location.hash) {
			for (let key in inputRefs) {
				if(`#${key.replaceAll(' ', '-')}` === props.location.hash){
					this.timeout = setTimeout(()=>{
						inputRefs[key].ref.scrollIntoView({
							behaviour: 'smooth',
							block: 'start',
							inline: 'center'
						});						
					}, 2000);
				}
			}
		}
	}
	render() {
		const { competitions, match, userAvaliable } = this.props;
		let display = null;
		if(!competitions){
			display = <Loader />
		}else if(competitions.length <= 0){
			display = <p>No competitions To Display</p>
		}else {
			display = (<Aux>
				{
					competitions.map(compet=>{
						return (
							<article
								className='Competition'
								ref={(el)=>{this.setCompetitionRef(el, compet.name)}}
								key={compet.name} >
								<Competition compet={compet} />
							</article>
						);
					})
				}
			</Aux>);
		}
		return (
			<section className='Competitions'>
				<div className='Competitions-Top'>
					<h2>Competitions</h2>
					{userAvaliable && 
						<Aux>
							<Link 
								to={`/company/${match.params.companyId}/competitions/new`}
								className='Add'>
								<div className='Add-Company'></div>
							</Link>
						</Aux>
					}
				</div>
				{display}
			</section>
		);
	}
}
const mapStateToProps = state =>{
	return {
        userAvaliable: state.user.userAvaliable
	}
}

export default connect(mapStateToProps, null)(withRouter(Competitions));