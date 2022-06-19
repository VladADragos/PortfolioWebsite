import type { NextPage } from 'next';
import profilePicture from '../assets/images/IMG_20220615_153521.png';
import AboutText from '../assets/data/About';
const About: NextPage = () => {
	return (
		<div className='flex flex-col  lg:w-3/5'>
			<div className='flex flex-col lg:flex-row'>
				<div className='flex-1 flex flex-row  justify-end '>
					<div className='flex-1 '>
						<svg
							viewBox='0 0 120 120'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<clipPath id='blob'>
									<path
										fill='#FF0066'
										d='M49.6,-38.9C61.7,-24.4,67.1,-3.9,62.5,13.3C57.8,30.5,43,44.5,25.3,53.2C7.7,61.9,-12.7,65.3,-33.5,59.2C-54.3,53.2,-75.4,37.6,-78.2,19.5C-81,1.5,-65.4,-19.1,-49.3,-34.6C-33.2,-50.1,-16.6,-60.4,1.1,-61.3C18.7,-62.1,37.5,-53.5,49.6,-38.9Z'
										transform='translate(55 50),scale(0.60 0.75)'
									/>
								</clipPath>
							</defs>
							<path
								fill='#404cbf'
								d='M49.6,-38.9C61.7,-24.4,67.1,-3.9,62.5,13.3C57.8,30.5,43,44.5,25.3,53.2C7.7,61.9,-12.7,65.3,-33.5,59.2C-54.3,53.2,-75.4,37.6,-78.2,19.5C-81,1.5,-65.4,-19.1,-49.3,-34.6C-33.2,-50.1,-16.6,-60.4,1.1,-61.3C18.7,-62.1,37.5,-53.5,49.6,-38.9Z'
								transform='translate(60 55),scale(0.60 0.75)'
							/>
							<image
								id='image'
								href={profilePicture.src}
								clipPath='url(#blob)'
								x='0'
								y='0'
								width='100'
								height='100'
							/>
						</svg>
					</div>
				</div>
				<div className='flex-1 lg:pt-8'>
					<h2 className='text-4xl'>{AboutText.part1.heading}</h2>
					<div className='flex flex-col gap-4'>
						{AboutText.part1.body.map((par, index) => (
							<p className='text-sm font-normal' key={index}>
								{par}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='lg:mt-0 mt-8'>
				<h2 className='text-4xl'>{AboutText.part2.heading}</h2>
				<div className='flex flex-col gap-4'>
					{AboutText.part2.body.map((par, index) => (
						<p className='text-sm font-normal' key={index}>
							{par}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
