import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserService from '../../../../../services/UserService';

const contestant = ( props )=>{
	const { contestant, socials, faSocials } = props;
	return (
		<div key={contestant.name} className='Contestant'>
			<h4>{contestant.name}</h4>
			<img src={UserService.updateImgURL(contestant.img)} alt={contestant.name} />
			<div className='Contestant-Body'>
				<div className='Contestant-Body-Cover'>
					{/* this link would be to vote for this contestant*/}
					<Link to={`/contestant/${contestant.fakeId}`}>
						<p>{contestant.name}</p>
					</Link>
					<em>{`${contestant.quote.slice(0, 150)} ...`}</em>
					<div>
						<span>
							{socials.map(social=>{
								return (<a href={social.url} key={social.id} >
											<FontAwesomeIcon icon={faSocials[social.id]} />
										</a>)
								})}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default contestant;