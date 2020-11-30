import React from 'react';
import img from '../../assets/Ye.jpg'

const home = ( props )=>{
	return (
		<div className='Home'>
			<section className='Landing'>
				<div className='Left-Landing'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto, quas corporis, voluptatibus enim tempora,
						excepturi neque fuga voluptatem alias impedit adipisci
						cum laudantium blanditiis quidem totam officiis nesciunt?
						Cupiditate, libero.
					</p>
					<button>Learn more</button>					
				</div>
				<div className='Right-Landing'>
					<img src={img} alt="Red Star" />
				</div>
			</section>
			<section className='Services'>
				<article>
					<figure></figure>
					<div>
						<h2>Create your own competitions and set up different types</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, quas corporis, ...
						</p>
					</div>
				</article>
				<article>
					<figure></figure>
					<div>
						<h2>Accept payment for votes</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, quas corporis, ...
						</p>
					</div>
				</article>
				<article>
					<figure></figure>
					<div>
						<h2>Ensure theres no malpractice as the results could be audited</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, quas corporis, ...
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