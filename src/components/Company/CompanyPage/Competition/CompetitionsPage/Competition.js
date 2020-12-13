import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Category from './Category';

const competition = ( props )=>{
	let { compet } = props;
	let { categories } = compet;
	let topCategories = categories.slice(0, 3);
	return (
		<article className='Competition'>
			<div className='Competition-Info'>
				<h4>{compet.name}</h4>
				<p>{compet.description}</p>
				<Link to={`/company/${props.match.params.companyId}/competition/${compet.fakeId}`}>
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
		</article>
	);
}
export default withRouter(competition);