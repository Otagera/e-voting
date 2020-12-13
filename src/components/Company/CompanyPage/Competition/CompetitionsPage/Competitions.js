import React from 'react';

import Aux from '../../../../../hoc/Auxillary/Auxillary';
import Loader from '../../../../UI/Loader/Loader';
import Competition from './Competition';

const competitions = props => {
	const { competitions } = props;
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
						<Competition compet={compet} key={compet.name}/>
					);
				})
			}
		</Aux>);
	}
	return (
		<section className='Competitions'>
			<h2>Competitions</h2>
			{display}
		</section>
	);
}

export default competitions;