import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Contestant from './Contestant';

const category = ( props )=>{
	const { category, faSocials, match } = props;
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
			<Link 
				to={`/company/${match.params.companyId}/competition/${match.params.competitionId}/category/${category.fakeId}/edit`}
				className='Edit-Btn'>
					<button> Edit Category Data </button>
			</Link>
			<div className='Contestants'>
				{display}
			</div>
		</article>
	);
}
export default withRouter(category);