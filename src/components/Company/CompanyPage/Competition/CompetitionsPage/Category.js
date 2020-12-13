import React from 'react';

import UserService from '../../../../../services/UserService';

const category = ( props )=>{
	let { contestants } = props.category;
	let tempContestants = contestants.sort((a, b)=>a.vote - b.vote);
	tempContestants = tempContestants.reverse();
	let topContestants = tempContestants.slice(0, 3);
	return (
		<div className='Category'>
			<div className='Category-Header'>
				<div className='Imgs'>
					{
						topContestants.map((contest)=>{
							return(
								<img
									src={UserService.updateImgURL(contest.contestant.img)}
									alt={contest.contestant.name} title={contest.name}
									key={contest.contestant.fakeId} />
							);
						})
					}
				</div>
				<h4>{props.category.name}</h4>
			</div>
			<div className='Category-Body'>
				<ul>
					{
						topContestants.map((contest)=>{
							return(
								<li key={contest.contestant.fakeId}>
									<p>{contest.contestant.name}</p>
									<div>
										<div className='Vote-Bar' style={{width: `${contest.vote}%`}}></div>
									</div>
								</li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
}
export default category;