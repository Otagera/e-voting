import React from 'react';
import img from '../../assets/images/ye.jpg'

const home = ( props )=>{
	return (
		<div className='Home'>
			<section className='Landing'>
				<div className='Left-Landing'>
					<p>
						This is a website to help contest organizers create competitions,
						add contestant and allow fans to vote for their favorites.
						More features are to integrate payment for instance of contests
						where to vote you need to pay for those votes and also would add social media
						integration to measure social media engagements of contestants.
					</p>
					<button>Learn more</button>					
				</div>
				<div className='Right-Landing'>
					<img src={img} alt="YE" />
				</div>
			</section>
			<section className='Services'>
				<article>
					<figure></figure>
					<div>
						<h2>Create your own competitions and set up different types</h2>
						<p>
							You can Create a new competition and specify several features
							unique to it.
						</p>
					</div>
				</article>
				<article>
					<figure></figure>
					<div>
						<h2>Accept payment for votes</h2>
						<p>
							Have you ever thought of monitizing votes?
							Well we've got you covered, for competitions where it'll
							require user to pay a certain ammount before the can vote.
							You can add that feature to your competition.
						</p>
					</div>
				</article>
				<article>
					<figure></figure>
					<div>
						<h2>Ensure theres no malpractice as the results could be audited</h2>
						<p>
							The would be a log of every voter so the results could be audited if
							they are contested.
						</p>
					</div>
				</article>
			</section>
			<section className='Active-Contests'>
				<h2>Active Contests</h2>
				<div className='Cards'>
					<div className='Card'>
						<div className='Card-Header'>
							<h2>The Company</h2>
							<h4>The Contest</h4>
						</div>
						<div className='Card-Body'>
							<ul>
								<li>
									<p>contestant 1</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 2</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 3</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 4</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 5</p>
									<div className='Vote-Bar'></div>
								</li>
							</ul>
						</div>
						<div className='Card-Footer'>
							<button>View Contest</button>
						</div>
					</div>
					<div className='Card'>
						<div className='Card-Header'>
							<h2>The Company</h2>
							<h4>The Contest</h4>
						</div>
						<div className='Card-Body'>
							<ul>
								<li>
									<p>contestant 1</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 2</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 3</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 4</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 5</p>
									<div className='Vote-Bar'></div>
								</li>
							</ul>
						</div>
						<div className='Card-Footer'>
							<button>View Contest</button>
						</div>
					</div>
					<div className='Card'>
						<div className='Card-Header'>
							<h2>The Company</h2>
							<h4>The Contest</h4>
						</div>
						<div className='Card-Body'>
							<ul>
								<li>
									<p>contestant 1</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 2</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 3</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 4</p>
									<div className='Vote-Bar'></div>
								</li>
								<li>
									<p>contestant 5</p>
									<div className='Vote-Bar'></div>
								</li>
							</ul>
						</div>
						<div className='Card-Footer'>
							<button>View Contest</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default home;