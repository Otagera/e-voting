import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Contestant from './Contestant';

const category = ( props )=>{
	const { category, faSocials, match, userAvaliable } = props;
	const { contestants } = category;
	let display = null;
	if(contestants.length <= 0){
		display = <p>No Contestatnts to display</p>
	}else {
		display = (
			<Aux>
				{
					category.contestants.map((contestant)=>{
						let socials = [];
						for(let key in contestant.socials){
							socials.push({
								id: key,
								url: contestant.socials[key]
							});
						}
						return (
							<Contestant 
								contestant={contestant.contestant}
								socials={socials}
								faSocials={faSocials}
								categoryFakeId={category.fakeId}
								key={contestant.fakeId} />
						)
					})
				}
			</Aux>
			)
	}
	return (
		<article>
			{/*<h5>{category.type}</h5>*/}
			{userAvaliable && <Aux>
				<Link 
					to={`/company/${match.params.companyId}/competition/${match.params.competitionId}/category/${category.fakeId}/edit`}
					className='Edit-Btn'>
						<button className='Button'> Edit Category Data </button>
				</Link>
				<Link 
					to={`/company/${match.params.companyId}/competition/${match.params.competitionId}/category/${category.fakeId}/contestants/new`}
					className='Edit-Btn'>
						<button className='Button'> Add Contestant </button>
				</Link>
			</Aux>}
			<div className='Contestants'>
				{display}
			</div>
		</article>
	);
}
const mapStateToProps = state =>{
	return {
        userAvaliable: state.user.userAvaliable
	}
}
export default connect(mapStateToProps, null)(withRouter(category));