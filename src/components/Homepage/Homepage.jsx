import React from 'react';

import './Homepage.scss';

function Homepage() {
	return (
		<div className='homepage'>
			<section className='sidebar'>
				<div className='sidebar__container'>
					<div className='sidebar__top'>
						<h1 className='sidebar__top__heading'>
							#<span className='sidebar__top__heading--green'>Flo</span>
							Qast <small>The</small>
						</h1>

						<h2>Fastest, Most Accurate</h2>
					</div>

					<div className='sidebar__bottom'>
						<p>Way to Close Your Books!</p>
					</div>
				</div>
			</section>

			<section className='schedule'>
				<div className='schedule__container'>
					<div className='schedule__left'>
						<h2>SCHEDULE A DEMO</h2>
						<p>Learn More About FloQast.</p>
					</div>

					<div className='schedule__right'>
						<h1>
							Learn How FloQast Can{' '}
							<span className='schedule__right--green'>
								Improve Your Month-End
							</span>
						</h1>

						<div className='schedule__right__form'>
							<form>
								<input
									type='text'
									name='user.name'
									id='user.name'
									placeholder='First Name*'
								/>

								<input
									type='email'
									name='user.email'
									id='user.email'
									placeholder='Email*'
								/>

								<input type='submit' value='SCHEDULE NOW' />
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Homepage;
