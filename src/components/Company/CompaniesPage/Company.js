import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const company = ( props )=>{
	let { company, socials, faSocials } = props;
	return (
		<article className='Company' >
			<img src={company.img} alt="Company Img" />
			<div className='Company-Body'>
				<div className='Company-Body-Cover'>
					<Link to={`/company/${company.fakeId}`}>
						<p>{company.name}</p>
					</Link>
					<em>{`${company.description.slice(0, 50)} ...`}</em>
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
		</article>
	);
}
export default company;