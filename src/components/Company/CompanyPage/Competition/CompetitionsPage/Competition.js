import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Category from './Category';
import SetVotingDeadline from '../../../../../services/setVotingDeadline';

const competition = ( props )=>{
	let { compet, match } = props;
	let { categories } = compet;
	let topCategories = categories.slice(0, 3);
	return (
		<Aux>
			<div className='Competition-Info'>
				<h4>{compet.name}</h4>
				<p>
					{}
					{(compet.description.length >= 150)?
						`${compet.description.slice(0, 150)} ...`:
						compet.description
					}
				</p>
				<em>Voting {SetVotingDeadline(compet.deadline)}</em>
				<br/>
				<Link to={`/company/${match.params.companyId}/competition/${compet.fakeId}`}>
					View More...
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</div>
			<h4>Categories</h4>
			<div className='Categories'>
				{
					topCategories.map(category=>{
						return (
							<Category category={category} key={category.name} />
						);
					})
				}
			</div>
		</Aux>
	);
};
export default withRouter(competition);